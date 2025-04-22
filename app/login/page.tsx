"use client";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    await signInWithPopup(auth, provider);
    router.push("/chat");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        onClick={handleSignIn}
      >
        Sign in with Google
      </button>
    </div>
  );
}