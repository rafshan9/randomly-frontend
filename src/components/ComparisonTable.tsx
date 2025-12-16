import Image from "next/image";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-emerald-500 mx-auto">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-gray-300 mx-auto">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function ComparisonTable() {
  const rows = [
    { feature: "Automated estimates sent instantly", randomly: true, others: false },
    { feature: "No back-and-forth pricing emails", randomly: true, others: false },
    { feature: "Only hear from qualified leads", randomly: true, others: false },
    { feature: "All leads in one dashboard", randomly: true, others: false },
    { feature: "Focus on client work, not admin", randomly: true, others: false },
    { feature: "Works while you sleep", randomly: true, others: false },
    { feature: "Get notified instantly on Slack", randomly: true, others: false },
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-gray-400 font-medium mb-2">Ok but...</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why does this beat contact forms and <br/> 'Get in Touch' buttons?
        </h2>

        {/* Added overflow-x-auto for mobile scrolling */}
        <div className="w-full overflow-x-auto">
            {/* Added min-w-[600px] to ensure it doesn't squish on mobile */}
            <div className="min-w-[600px]">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 items-center mb-6 px-6">
                    <div className="col-span-6"></div> 
                    
                    {/* Randomly Logo Column */}
                    <div className="col-span-3 flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg">
                            {/* Added className="brightness-0 invert" to make the logo white */}
                            <Image 
                                src="/icon-randomly.svg" 
                                width={20} 
                                height={20} 
                                alt="Randomly" 
                                className="brightness-0 invert"
                            />
                        </div>
                    </div>
                    
                    {/* Others Column */}
                    <div className="col-span-3 text-center text-gray-400 text-sm font-medium">
                        Contact form / Email
                    </div>
                </div>

                {/* Table Rows */}
                <div className="flex flex-col gap-2">
                    {rows.map((row, index) => (
                        <div 
                            key={index} 
                            className={`grid grid-cols-12 items-center py-4 px-6 rounded-xl ${index % 2 === 0 ? 'bg-gray-50' : 'bg-transparent'}`}
                        >
                            <div className="col-span-6 font-medium text-gray-900 text-sm md:text-base">
                                {row.feature}
                            </div>
                            <div className="col-span-3 flex justify-center">
                                {row.randomly ? <CheckIcon /> : <XIcon />}
                            </div>
                            <div className="col-span-3 flex justify-center">
                                {row.others ? <CheckIcon /> : <XIcon />}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
}