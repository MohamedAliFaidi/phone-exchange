import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: sessionData } = useSession();

  return (
    <>
      {/* <Head>
        <title>Phone-Exchange</title>
        <meta name="description" content="Phone-Exchange" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f1235] to-[#090920]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
                <h3 className="text-xl font-bold">Posts</h3>
                <Posts />
              </div>
              <CreatePost />
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-l text-center text-white">
                {sessionData && (
                  <span>Logged in as {sessionData.user?.email}</span>
                )}
              </p>
              <button
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                onClick={
                  sessionData ? () => void signOut() : () => void signIn()
                }
              >
                {sessionData ? "Sign out" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </main> */}
      <Head>
        <title>Phone-Exchange</title>
        <meta name="description" content="Phone-Exchange" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div>
          <nav className="container mx-auto px-5 py-5 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link
                className="text-xl font-bold text-gray-800 hover:text-blue-400 md:text-2xl"
                href="/home"
              >
                Logo
              </Link>
              <div className="flex md:hidden">
                <button
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                  type="button"
                  className="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              aria-hidden={showMenu}
              className={
                showMenu
                  ? "display-overflow mt-8 flex flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10"
                  : "display-overflow mt-8 hidden flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10"
              }
            >
              <Link className="text-gray-800 hover:text-blue-400" href="/">
                Home
              </Link>
              <Link
                className="text-gray-800 hover:text-blue-400"
                href="/Market"
              >
                Marketplace
              </Link>
              <Link
                className="text-gray-800 hover:text-blue-400"
                href="/contact"
              >
                Contact US
              </Link>
              <Link className="text-gray-800 hover:text-blue-400" href="/about">
                About Us
              </Link>

              {/* <form className="flex items-center space-x-2 rounded-full border-2 border-blue-600 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>

                  <input
                    className="w-full text-gray-800 placeholder-gray-800 outline-none"
                    type="text"
                    placeholder="Search"
                  />
                </form> */}
              <button
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                onClick={
                  sessionData ? () => void signOut() : () => void signIn()
                }
              >
                {sessionData ? "Sign out" : "Sign in"}
              </button>
            </div>
          </nav>
        </div>
        <div className="container mx-auto flex flex-col flex-wrap items-center px-6 pt-24 md:flex-row md:pt-48">
          <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
            <h1 className="slide-in-bottom-h1 my-4 text-center text-3xl font-bold leading-tight text-purple-800 md:text-left md:text-5xl">
              Main Hero Message to sell your app
            </h1>
            <p className="slide-in-bottom-subtitle mb-8 text-center text-base leading-normal md:text-left md:text-2xl">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>

            <p className="fade-in pb-8 text-center font-bold text-blue-400 md:text-left lg:pb-6">
              Explore
            </p>
            <div className="fade-in flex w-full justify-center pb-24 md:justify-start lg:pb-0">
              <Image
                width={100}
                height={100}
                src="App Store.svg"
                className="bounce-top-icons h-12 pr-4"
                alt={""}
              ></Image>
              <Image
                height={100}
                width={100}
                src="Play Store.svg"
                className="bounce-top-icons h-12"
                alt={""}
              ></Image>
            </div>
          </div>
          <div className="w-full overflow-y-hidden py-6 xl:w-3/5">
            <Image
              height={100}
              width={100}
              className="slide-in-bottom mx-auto w-5/6 lg:mr-0"
              src="devices.svg"
              alt={""}
            ></Image>
          </div>
          <div className="fade-in w-full pt-16 pb-6 text-center text-sm md:text-left">
            <Link
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; Phone-Exchange 2023
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
