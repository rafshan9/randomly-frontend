"use client";
import { useState } from "react";
import Image from "next/image";

// Chevron Icon ... (keep existing)
const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
     // ... (keep existing questions)
    { q: "Will this actually increase my leads?", a: "Yes! By giving visitors instant gratification with an estimate, they are more likely to convert than if they have to wait for an email reply." },
    { q: "Can I create my own questions and pricing?", a: "Absolutely. You can customize every aspect of the questionnaire to match your specific services and pricing model." },
    { q: "How long does setup really take?", a: "Most users get their first widget live in about 15 minutes. We have templates to help you get started fast." },
    { q: "What happens after the 14-day trial?", a: "You can choose to upgrade to our Pro plan to keep using all features, or your account will pause until you're ready." },
    { q: "Does it work on my website?", a: "Yes, Randomly works with Webflow, WordPress, Squarespace, Framer, and any custom HTML/React site." },
    { q: "What if I need help?", a: "We offer email support and documentation. Pro plans get priority support via Slack." },
  ];

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Testimonial Section */}
      <div className="text-center mb-24">
         <p className="text-xl font-medium mb-6 max-w-lg mx-auto leading-relaxed">
           "What a great tool and super helpful, I wish more designers had this on their websites."
         </p>
         <div className="flex items-center justify-center gap-3">
            
            {/* --- UPDATED IMAGE SECTION --- */}
            <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-200">
                 <Image 
                   src="/amber.jpg" 
                   fill 
                   className="object-cover" 
                   alt="Amanda Peyton" 
                 />
            </div>
            {/* ----------------------------- */}

            <div className="text-left text-sm">
                <p className="font-bold text-gray-900">Amanda Peyton</p>
                <p className="text-gray-500">Founder at Pool</p>
            </div>
         </div>
      </div>

      {/* ... FAQ List (keep existing) ... */}
      <div className="text-center mb-10">
        <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">FAQ</p>
        <h2 className="text-4xl font-bold">A few more questions?</h2>
      </div>

      <div className="w-full border-t border-gray-200">
        {questions.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
                <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center py-5 text-left hover:bg-gray-50 transition-colors"
                >
                    <span className="font-medium text-gray-900">{item.q}</span>
                    <ChevronDown isOpen={openIndex === index} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                    <p className="text-gray-600 leading-relaxed pr-8">{item.a}</p>
                </div>
            </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500">
          Still have questions? <a href="#" className="text-black font-semibold underline">Book a demo</a>
      </p>

    </section>
  );
}