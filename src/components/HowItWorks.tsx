import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      image: "/frame1.svg",
      title: "Design to match your brand",
      description: "Create questions with branching paths. Different project types get different questions. Then style everything to match your portfolio."
    },
    {
      id: "02",
      image: "/frame2.svg",
      title: "Set your pricing rules",
      description: "Set how answers affect price: add fixed amounts, percentages, or multipliers. Round to nice numbers. Add conditional rules."
    },
    {
      id: "03",
      image: "/frame3.svg",
      title: "Write your email and go live!",
      description: "Write the estimate email in your voice. Add your branding. Drop one line of code on your site. You're live!"
    }
  ];

  return (
    // UPDATED: Increased padding on large screens (lg:px-40) to make frames smaller
    <section className="bg-[#F5F5F5] py-24 px-6 md:px-20 lg:px-40">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-2">I know what you are thinking....</p>
          <h2 className="text-4xl font-bold text-black">How does it work?</h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col">
              
              {/* Image Frame Area */}
              <div className="bg-[#EAEAEA] rounded-2xl overflow-hidden mb-8 flex items-center justify-center aspect-[4/3] relative">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-contain p-8" 
                  />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                  {/* Number Badge + Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-black leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed pl-[44px]">
                    {step.description}
                  </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}