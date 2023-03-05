import Error from "./error";
import VerifyRequest from "./verify-request";
import NewUser from "./newUser";
import { useEffect, useState } from "react";
import router from "next/router";

export default function Index() {
  const [route, setRoute] = useState("");
  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname === "/auth/newUser") setRoute("newUser");
    if (router.pathname === "/auth/verify-request") setRoute("verifyRequest");
    if (router.pathname === "/auth/error") setRoute("error");
  }, []);
  if (route === "newUser") return <NewUser />;
  else if (route === "verifyRequest") return <VerifyRequest />;
  else if (route === "error") return <Error />;
}
