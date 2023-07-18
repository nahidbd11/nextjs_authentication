"use client";

import AuthProvider from "@/app/_context/auth_context";
import { useSession } from "next-auth/react";
import React from "react";

const Contact = () => {
  let session = useSession({ required: true });
  return (
    <AuthProvider>
      <div className="min-h-screen">Contact</div>
    </AuthProvider>
  );
};
Contact.requireAuth = true;
export default Contact;
