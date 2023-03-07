import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425973864910669"
          crossOrigin="anonymous"
        ></script>
      </head>
      <SessionProvider session={session}>
        <main
          className="h-screen bg-cover bg-right  pb-14 leading-normal tracking-normal text-gray-900"
          style={{ backgroundImage: "url('/bg.svg')" }}
        >
          <Component {...pageProps} />
        </main>
        <Toaster />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
