import Image from "next/image"; // Note: You can remove this line if you aren't using the <Image /> component yet

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-white text-4xl font-bold mb-8">Log in to Randomly</h1>
      
      {/* CARD CONTAINER */}
      {/* Added w-full and max-w-md back so it has a proper size */}
      <div className="flex flex-col items-start gap-[30px] p-[30px] rounded-[14px] bg-[#191919] w-full max-w-md">
        
        {/* --- Direct Child 1: Google Button --- */}
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 py-3 text-white hover:bg-zinc-800 transition-colors">
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
          placeholder="Your personal email address" 
          className="w-full rounded-lg border border-zinc-700 bg-transparent p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
        />

        {/* --- Direct Child 4: Email Button --- */}
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border bg-white py-3 text-black hover:bg-zinc-200 transition-colors">
          {/* Removed the empty span unless you plan to put an icon there later */}
          <span className="font-semibold">Continue with email</span>
        </button>

      </div>
    </main> 
  );
}