"use client";
import { useState} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    {/* Basic check: Do passwords match? */}
    if (formData.password != formData.confirm_password){
      return;
    }
    try {
      // The Bridge: Talk to Django
      const response = await fetch("http://13.214.161.199/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Account created! Redirecting to login...");
        router.push("/login"); // Go to login page
      } else {
        const errorData = await response.json();
        alert("Error: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong. Is the backend running?");
    }
  };

  
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center bg-black">
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
      >
        Home
      </Link>
      <h1 className="text-white text-4xl font-bold mb-8">Signup to Randomly</h1>
      
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
     
        <div className="text-sm text-zinc-500 self-center">or</div>

        <div className="flex gap-4 w-full">
          {/* --- Input First Name --- */}
          <input 
            type="text"
            required 
            placeholder="First name" 
            value={formData.first_name}
            onChange={(e) => setFormData({...formData, first_name: e.target.value})}
            /* ADDED min-w-0 here */
            className="flex-1 min-w-0 rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
          />
          {/* --- Input Last Name --- */}
          <input 
            type="text" 
            required
            placeholder="Last Name" 
            value={formData.last_name}
            onChange={(e) => setFormData({...formData, last_name: e.target.value})}
            /* ADDED min-w-0 here */
            className="flex-1 min-w-0 rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        
        {/* --- Input --- */}
        <input 
          type="email" 
          required
          placeholder="Your personal email address" 
          value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />
        {/* --- Input Password --- */}
        <input 
          type="password" 
          required
          placeholder="Password" 
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />
        {/* --- Input Confirm Password --- */}
        <input 
          type="password" 
          required
          placeholder="Confirm password" 
          value={formData.confirm_password}
          onChange={(e) => setFormData({...formData, confirm_password: e.target.value})}
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />
        

        {/* --- Direct Child 4: Email Button --- */}
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border bg-white py-3 text-black hover:bg-zinc-200 transition-colors">
          {/* Removed the empty span unless you plan to put an icon there later */}
          <span className="font-semibold">Sign up</span>
        </button>

        <p className="text-sm w-full text-center  text-zinc-500">
          <Link href="/login" className="text-white hover:underline">Already have an account?</Link>
        </p>

      </form>
    </main> 
  );
}