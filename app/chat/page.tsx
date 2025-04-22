"use client";
import { useEffect, useState } from "react";
import { getAuth, signOut, User } from "firebase/auth";
import { app } from "@/lib/firebase";
import Chatroom from "@/components/Chatroom";

export default function ChatPage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  if (!user) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Chatroom user={user} />
      <button
        className="mt-6 text-sm text-red-500 underline"
        onClick={() => signOut(getAuth(app))}
      >
        Sign out
      </button>
    </div>
  );
}