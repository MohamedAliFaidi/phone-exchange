import nodemailer from "nodemailer";
import { theme } from "tailwind.config.cjs";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "devfaidi2@gmail.com",
    pass: "oqiawtzxrkweneup",
  },
});

const brandColor = "#346df1";
const color = {
  background: "#f9f9f9",
  text: "#444",
  mainBackground: "#fff",
  buttonBackground: brandColor,
  buttonBorder: brandColor,
  buttonText: "#fff",
};
export const sendConfirmationMail = (email: string, code: string) => {
  return transport.sendMail({
    from: "devfaidi2@gmail.com",
    to: email,
    subject: "Confirm login",
    text: `Please clicl the link below to access your account`,
    html: ` 
    <body style="background: ${color.background};">
      <table width="100%" border="0" cellspacing="20" cellpadding="0"
        style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
        <tr>
          <td align="center"
            style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            Sign in to <strong>PHONE-EXCHANGE</strong>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${code}"
                    target="_blank"
                    style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                    in</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center"
            style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
            If you did not request this email you can safely ignore it.
          </td>
        </tr>
      </table>
    </body>
    
    
    
    `,
  });
};
