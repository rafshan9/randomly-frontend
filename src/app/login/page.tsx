"use client";
import { useState} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // FIX 1: Changed URL from 'signup' to 'login'
      const response = await fetch("http://13.214.161.199/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // FIX 2: Success!
        alert("Login Successful!");
        // We will build a dashboard later. For now, this proves it worked.
        console.log("User is logged in"); 
      } else {
        // If password is wrong, this runs
        alert("Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong. Is the backend running?");
    }
  };


  return (
    <main className="return flex min-h-screen flex-col items-center justify-center bg-black">
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
      >
    Home
  </Link>
      <h1 className="text-white text-4xl font-bold mb-8">Log in to Randomly</h1>
      
      {/* CARD CONTAINER */}
      {/* Added w-full and max-w-md back so it has a proper size */}
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-[30px] p-[30px] rounded-[14px] bg-[#191919] w-full max-w-md">
        
        {/* --- Direct Child 1: Google Button --- */}
        <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 py-3 text-white hover:bg-zinc-800 transition-colors">
          <Image
          src="/icon-google-color.png"
          alt="Google logo"
          width={20}
          height={20}
          />
          <span>Continue with Google</span>
        </button>

        {/* --- Direct Child 2: OR Text --- */}
        {/* Removed 'items-center'. Kept 'self-center' so it sits in the middle. */}
        <div className="text-sm text-zinc-500 self-center">or</div>

        {/* --- Direct Child 3: Input --- */}
        <input 
          type="email" 
          required
          value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Your personal email address" 
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />
        {/* ---Password--- */}
        <input 
          type="password" 
          required
          placeholder="Password" 
          value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />

        {/* --- Direct Child 4: Email Button --- */}
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border bg-white py-3 text-black hover:bg-zinc-200 transition-colors">
          {/* Removed the empty span unless you plan to put an icon there later */}
          <span className="font-semibold">Sign in</span>
        </button>
        <p className="text-sm w-full text-center  text-zinc-500">
          <Link href="/signup" className="text-white hover:underline">Don't have an account?</Link>
        </p>

      </form>
    </main> 
  );
}