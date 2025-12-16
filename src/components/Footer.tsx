import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-20 px-4 flex flex-col items-center">
      
      {/* --- CTA Card Section --- */}
      <div className="w-full max-w-5xl bg-black rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden mb-20">
        
        {/* The Green Glow Effect */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-900/40 blur-[120px] -translate-x-1/3 -translate-y-1/3 rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for more demand?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
                Stop losing leads to ‘Get in touch’ buttons and boring contact forms.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="px-8 py-3 rounded-lg border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition-colors">
                    Start free trial
                </button>
                <button className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                    Book a demo
                </button>
            </div>
        </div>
      </div>

      {/* --- Bottom Footer Bar --- */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-4">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0 hover:opacity-80 transition-opacity">
             <Image src="/icon-randomly.svg" width={24} height={24} alt="Randomly" />
             <span className="font-bold text-black text-lg">Randomly</span>
        </Link>

        {/* Right: Navigation Links */}
        <div className="flex gap-8 font-medium">
            <Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Support</Link>
        </div>
      </div>

    </footer>
  );
}