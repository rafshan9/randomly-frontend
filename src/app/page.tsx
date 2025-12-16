import Image from "next/image";
import Link from "next/link";
// Imports
import Footer from "@/components/Footer";
import BrowserMockup from "@/components/BrowserMockup"; 
import DashboardMockup from "@/components/DashboardMockup"; 
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import FoundersNote from "@/components/FoundersNote";
import HowItWorks from "@/components/HowItWorks";
import BackgroundBlob from "@/components/BackgroundBlob"; 

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* === HEADER SECTION WRAPPER === */}
      {/* Added z-0 to establish a stacking context */}
      <div className="relative pt-10 pb-20 z-0">
        
        <div className="absolute inset-0 translate-y-[70%] -z-10">
           <BackgroundBlob />
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex bg-white/80 backdrop-blur-sm gap-[90px] items-center w-fit rounded-xl mx-auto py-[10px] px-[16px] shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 font-bold italic">
            <Image src="/icon-randomly.svg" alt="Logo" width={24} height={24} />
            Randomly
          </div>
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li><Link href="/pricing" className="hover:text-gray-600">Pricing</Link></li>
            <li>
              <div className="flex items-center justify-between gap-[4px]">
                <Link href="/login" className="flex items-center bg-white text-black py-[4px] px-[20px] border rounded-[4px] hover:bg-gray-50 transition-colors"> Sign in </Link>
                <Link href="/signup" className="flex items-center bg-black text-white py-[6px] px-[20px] border rounded-[4px] hover:bg-gray-800 transition-colors"> Get Started </Link>
              </div>
            </li>          
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center text-center mt-[50px] max-w-[740px] mx-auto px-4"> 
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            The pricing widget your portfolio is missing
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Visitors get instant estimates. You get leads that qualify <br />
            themselves. All automatic, no back-and-forth pricing emails.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-black text-white py-3 px-6 rounded border border-black font-medium hover:bg-gray-800 transition-colors">
              Add to your portfolio
            </button>
            <button className="bg-white text-black py-3 px-6 rounded border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
              Get a personal demo
            </button>
          </div>
                  
          <p className="text-gray-500 text-sm italic mt-4">14 Days Free. No credit card required.</p>
        </section>

      </div>
      {/* === END HEADER WRAPPER === */}


      {/* Browser Mockup Component */}
      {/* The blob will visually bleed behind this component now */}
      <BrowserMockup />

      <HowItWorks />

      <section className="flex flex-col items-center text-center mt-[150px] max-w-7xl mx-auto"> 
        <div className="max-w-[740px] mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            So they submitted. Now what?
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Your estimate lands in their inbox. Their info lands in your 
            dashboard. You stay focused on the work matters.
          </p>
        </div>
        <DashboardMockup />     
      </section>

      <ComparisonTable />
      <FoundersNote />
      <FAQ />
      <Footer />
      
    </main>
  );
}