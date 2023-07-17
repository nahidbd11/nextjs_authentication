"use client";

import { RedirectType } from "next/dist/client/components/redirect";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  // const signIn = () => {
  //   console.log("clicked");
  //   router.push("/home");
  // };

  return (
    <main className="min-h-screen p-24">
      <h2 className="text-4xl">Hello world</h2>
      <button
        className="shadow-lg text-white px-4 py-2 rounded-lg bg-emerald-400 mt-2"
        onClick={() => signIn()}
      >
        Login
      </button>
    </main>
  );
}
