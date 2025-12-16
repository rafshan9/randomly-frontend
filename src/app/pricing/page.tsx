import Image from "next/image";
import Link from "next/link";

// Simple internal SVG component for the checkmark to keep things tidy
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function PricingPage() {
  return (
    <main className=" min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center relative">
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
      >
        Home
      </Link>
      
      
      {/* --- Header Section --- */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl">
        {/* Ensure icon-randomly.svg is in your /public folder */}
        <Image 
            src="/icon-randomly.svg" 
            alt="Randomly Logo" 
            width={48} 
            height={48} 
            className="mb-6 brightness-0 invert"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose your plan</h1>
        <p className="text-xl text-gray-400">
          Start with a free trial, then go Pro for $15/month.
        </p>
      </div>

      {/* --- Cards Container --- */}
      {/* Flex-col for mobile, flex-row for desktop (md:) */}
      <div className="flex flex-col md:flex-row gap-8 max-w-3xl mx-auto">
        
        {/* === CARD 1: Free Trial === */}
        {/* flex-1 ensures they take equal width on desktop. flex flex-col enables pushing footer to bottom. */}
        <div className="flex-1 bg-[#1A1A1A] rounded-3xl border border-zinc-800 p-8 flex flex-col">
            
            {/* Card Header & Dashed Line */}
            <div>
               <h2 className="text-2xl font-bold mb-2">Free Trial</h2>
               <div className="border-b-2 border-dashed border-zinc-700 mb-8 w-[60px]"></div>
            </div>

            {/* Features List */}
            {/* mb-auto pushes everything below it down */}
            <ul className="flex flex-col gap-4 mb-auto text-gray-300 font-medium">
               <li className="flex items-start gap-3"><CheckIcon /> Full access for 14 days</li>
               <li className="flex items-start gap-3"><CheckIcon /> No credit card required</li>
               <li className="flex items-start gap-3"><CheckIcon /> Unlimited estimates & leads</li>
            </ul>

            {/* Card Footer: Price & Button */}
            <div className="mt-10">
                <div className="mb-8">
                    <span className="text-3xl font-bold text-white">Free</span>
                    <span className="text-xl text-gray-400 ml-2 font-medium">for 14 days</span>
                </div>
                <button className="w-full bg-white text-black py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                    Get started with free trial
                </button>
            </div>
        </div>

        {/* === CARD 2: Randomly Pro === */}
        <div className="flex-1 bg-[#1A1A1A] rounded-3xl border border-zinc-800 p-8 flex flex-col">
             
             {/* Card Header & Dashed Line */}
             <div>
                <h2 className="text-2xl font-bold mb-2">Randomly Pro</h2>
                <div className="border-b-2 border-dashed border-zinc-700 mb-8 w-[60px]"></div>
             </div>

             {/* Features List */}
             <ul className="flex flex-col gap-4 mb-auto text-gray-300 font-medium">
                <li className="flex items-start gap-3"><CheckIcon /> Unlimited estimates and leads</li>
                <li className="flex items-start gap-3"><CheckIcon /> Remove “Powered by” branding</li>
                <li className="flex items-start gap-3"><CheckIcon /> Slack notifications</li>
                <li className="flex items-start gap-3"><CheckIcon /> Embed on any website</li>
                <li className="flex items-start gap-3"><CheckIcon /> Lock in early supporter pricing</li>
                <li className="flex items-start gap-3"><CheckIcon /> Cancel anytime</li>
             </ul>

             {/* Card Footer: Price & Button */}
             <div className="mt-10">
                 <div className="mb-8">
                     <span className="text-3xl font-bold text-white">$15</span>
                     <span className="text-xl text-gray-400 ml-1 font-medium">/month</span>
                 </div>
                 <button className="w-full bg-white text-black py-3.5 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                     Get started with Randomly Pro
                 </button>
             </div>
        </div>

      </div>
    </main>
  );
}