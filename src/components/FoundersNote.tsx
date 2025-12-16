import Image from "next/image";

export default function FoundersNote() {
  return (
    <section className="bg-[#F5F5F5] py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        {/* Left Side: Headline */}
        <div className="md:w-1/3 sticky top-10">
          {/* Reduced size to text-3xl/4xl */}
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight leading-[1.1]">
            Yo. I'm Rafshan <br />
            <span className="text-gray-400">(I built Randomly)</span>
          </h2>
        </div>

        {/* Right Side: Content */}
        {/* CHANGED: text-base (smaller), font-normal (thinner), space-y-6 (tighter) */}
        <div className="md:w-2/3 text-base md:text-lg text-gray-600 space-y-6 leading-relaxed font-normal">
            <p>
                I started Randomly to help designers work with cool people.
            </p>
            <p>
                Not to write proposals. Not to go back and forth over email. 
                Not to sit on sales calls only to find out the client's budget is too small.
            </p>
            <p>
                Turns out, clients don't love that stuff either. They just want to know if you fit the budget and if you can solve their problem.
            </p>
            <p>
                So I built Randomly. A way for freelancers and small studios to skip pricing conversations that go nowhere, and a way for clients to find out if you fit the budget without the time suck of back and forth emails.
            </p>
            <p>
                They get a price in seconds. You get leads that qualify themselves. Everyone has more time for the work that actually matters.
            </p>
            <p className="text-black">
                Since adding it to my own site, <span className="font-semibold">I've generated 80+ leads in 6 months, increased my prices 100% from the demand it's created, and saved hours</span> by not writing proposals and sitting on calls that went nowhere.
            </p>
            <p>
                If you want to spend less time on admin and more time on work you enjoy, try it free for 14 days.
            </p>
            <p>
                I think you'll love it.
            </p>

            {/* Signature Block */}
            <div className="mt-12 pt-8">
                <div className="flex items-center gap-4 mb-6">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-200">
                         <Image 
                           src="/daniel.jpg" 
                           fill 
                           className="object-cover" 
                           alt="Rafshan Isti Ahmed" 
                         />
                    </div>
                    <div>
                        <p className="font-bold text-black text-sm">Rafshan Isti Ahmed</p>
                        <p className="text-xs text-gray-400">Founder / Randomly</p>
                    </div>
                </div>
                
                {/* Signature */}
                 <div className="w-28 h-14 opacity-80 text-black">
                    <svg viewBox="0 0 200 100" className="w-full h-full stroke-current stroke-1 fill-none">
                        <path d="M10,70 Q50,10 80,60 T150,50" />
                    </svg>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
}