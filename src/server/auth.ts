import type { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import EmailProvider from "next-auth/providers/email";
import { PostType } from "../types";
import { sendConfirmationMail } from "~/server/nodemailer";

/**
 * Module augmentation for `next-auth` types
 * Allows us to add custom properties to the `session` object
 * and keep type safety
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      
    } & DefaultSession["user"];
  }


}


export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER || "https://localhost:3000",
        port: 587,
        auth: {
          user: "apikey",
          pass: process.env.EMAIL_PASSWORD || "",
        },
      },
      from: process.env.EMAIL_FROM || "default@default.com",

      async sendVerificationRequest({ url, identifier }) {
        sendConfirmationMail(identifier, url);
      },
    }),
  ],
};



export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
