import Image from "next/image";

export default function BrowserMockup() {
  return (
    <div className="mt-14 max-w-6xl mx-auto border border-gray-200 rounded-xl shadow-2xl overflow-hidden bg-white">
      
      {/* Browser Header (Traffic lights + URL bar) */}
      <div className="flex items-center gap-4 bg-white border-b border-gray-200 p-4">
        
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        {/* Navigation Icons (Back/Forward/Reload) */}
        <div className="flex items-center gap-3">
          {/* Ensure these icons exist in your public folder, or use text fallback like <p><</p> if missing */}
          <Image src="/icon-leftarrow.svg" alt="Back" width={12} height={12} className="opacity-50" />
          <Image src="/icon-rightarrow.svg" alt="Forward" width={12} height={12} className="opacity-50" />
          <Image src="/icon-reload.svg" alt="Reload" width={12} height={12} className="opacity-50" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center bg-gray-100 rounded-md text-sm text-gray-400 px-3 py-1.5 w-full font-medium">
          randomly.com
        </div>
      </div>

      {/* Browser Body (The Image) */}
      <div className="relative w-full h-auto bg-gray-50">
        {/* Make sure hero-image.png is in your public folder */}
        <Image 
          src="/hero-image.png" 
          alt="Dashboard Preview" 
          width={1200} 
          height={800} 
          className="w-full h-auto block"
          priority 
        />
      </div>

    </div>
  );
}