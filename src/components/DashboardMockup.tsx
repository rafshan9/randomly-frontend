import Image from "next/image";

export default function DashboardMockup() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 justify-center items-center py-10 w-full px-4">
      
      {/* --- Dashboard dark --- */}
      <div className="bg-[#262626] rounded-xl border border-gray-700 shadow-xl w-full flex-1">
          
          {/* Traffic Light Title Bar */}
          <div className="flex items-center gap-4 px-6 py-4">
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-400 text-sm">Dashboard</p>
          </div>
          
          {/* CARD SECTION */}
          <div className="flex justify-between gap-4 p-6"> 
            <div className="flex flex-col bg-[#262626] items-center py-[20px] border border-gray-700 rounded-[12px] flex-1">
              <div className="text-white text-[48px]">14</div>
              <div className="text-gray-400 text-xs">Leads (last 7 days)</div>
            </div>
            <div className="flex flex-col bg-[#262626] items-center py-[20px] border border-gray-700 rounded-[12px] flex-1">
              <div className="text-white text-[48px]">57%</div>
              <div className="text-gray-400 text-xs">Completion rate (last 7 days)</div>
            </div>
            <div className="flex flex-col bg-[#262626] items-center py-[20px] border border-gray-700 rounded-[12px] flex-1">
              <div className="text-white text-[48px]">17%</div>
              <div className="text-gray-400 text-xs">Interaction rate (last 7 days)</div>
            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="flex flex-col px-[30px] py-[20px] gap-[2px]">
              <div className="flex text-gray-400 w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">Email</p>
                  <p className="w-1/4 text-sm text-left">Status</p> 
                  <p className="w-1/6 text-sm text-right">Price</p> 
                  <div className="w-1/6 flex justify-end">
                      <p className="text-sm">Action</p>
                  </div>
              </div>

              {/* Rows 1-9 (Dark) */}
              {/* Row 1 */}
              <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">c.davis@corp.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-follow-up.svg" width={16} height={16} alt="To follow up"/> 
                          <p className="text-sm">To follow up</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
              {/* Row 2 */}
              <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">s.patel@web.io</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-contacted.svg" width={16} height={16} alt="Contacted"/> 
                          <p className="text-sm">Contacted</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$5,779</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
              {/* Row 3 */}
              <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">a.chan@mail.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-lost.svg" width={16} height={16} alt="Project lost"/> 
                          <p className="text-sm">Project lost</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$8,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 4 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">m.rivera@inc.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-won.svg" width={16} height={16} alt="Project won"/> 
                          <p className="text-sm">Project won</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 5 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">l.gonzales@site.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-follow-up.svg" width={16} height={16} alt="To follow up"/> 
                          <p className="text-sm">To follow up</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$6,700</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 6 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">k.singh@biz.net</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-new.svg" width={16} height={16} alt="New"/> 
                          <p className="text-sm">New</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$5,779</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 7 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">d.jackson@tech.org</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-lost.svg" width={16} height={16} alt="Project lost"/> 
                          <p className="text-sm">Project lost</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$7,850</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 8 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">j.smith@app.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-won.svg" width={16} height={16} alt="Project won"/> 
                          <p className="text-sm">Project won</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$6,700</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 9 */}
               <div className="flex text-white w-full py-3 items-center border-t border-gray-800">
                  <p className="w-1/3 text-sm text-left">e.brown@startup.co</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-[#1a1a1a] rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-contacted.svg" width={16} height={16} alt="Contacted"/> 
                          <p className="text-sm">Contacted</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,999</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-700 rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center w-full mt-4 pt-4">
                  <div className="flex items-center text-gray-400 text-sm gap-4">
                      <div className="flex items-center text-white gap-1 bg-gray-700 rounded-md px-2 py-1 cursor-pointer">
                          <p>10</p>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <p>1 to 10 of 43 leads</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                      <span className="cursor-pointer text-gray-400 hover:text-white px-1 py-1">&lt;</span>
                      <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold cursor-default">1</span>
                      <span className="text-gray-400 hover:text-white px-2 cursor-pointer">2</span>
                  </div>
              </div>
          </div>
      </div> 

      {/* --- Dashboard light --- */}
      <div className="bg-white rounded-xl border border-gray-700 shadow-xl w-full flex-1">
          {/* Traffic Light Title Bar */}
          <div className="flex items-center gap-4 px-6 py-4">
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-500 text-sm">Dashboard</p>
          </div>
          
          {/* CARD SECTION */}
          <div className="flex justify-between gap-4 p-6"> 
            <div className="flex flex-col bg-white items-center py-[20px] border border-gray-200 rounded-[12px] flex-1">
              <div className="text-black text-[48px]">14</div>
              <div className="text-gray-500 text-xs">Leads (last 7 days)</div>
            </div>
            <div className="flex flex-col bg-white items-center py-[20px] border border-gray-200 rounded-[12px] flex-1">
              <div className="text-black text-[48px]">57%</div>
              <div className="text-gray-500 text-xs">Completion rate (last 7 days)</div>
            </div>
            <div className="flex flex-col bg-white items-center py-[20px] border border-gray-200 rounded-[12px] flex-1">
              <div className="text-black text-[48px]">17%</div>
              <div className="text-gray-500 text-xs">Interaction rate (last 7 days)</div>
            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="flex flex-col px-[30px] py-[20px] gap-[2px]">
              <div className="flex text-gray-500 w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">Email</p>
                  <p className="w-1/4 text-sm text-left">Status</p> 
                  <p className="w-1/6 text-sm text-right">Price</p> 
                  <div className="w-1/6 flex justify-end">
                      <p className="text-sm">Action</p>
                  </div>
              </div>

              {/* Rows 1-9 (Light) */}
               {/* Row 1 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">c.davis@corp.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-follow-up.svg" width={16} height={16} alt="To follow up"/> 
                          <p className="text-sm">To follow up</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
              {/* Row 2 */}
              <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">s.patel@web.io</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-contacted.svg" width={16} height={16} alt="Contacted"/> 
                          <p className="text-sm">Contacted</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$5,779</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 3 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">a.chan@mail.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-lost.svg" width={16} height={16} alt="Project lost"/> 
                          <p className="text-sm">Project lost</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$8,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 4 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">m.rivera@inc.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-won.svg" width={16} height={16} alt="Project won"/> 
                          <p className="text-sm">Project won</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,200</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 5 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">l.gonzales@site.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-follow-up.svg" width={16} height={16} alt="To follow up"/> 
                          <p className="text-sm">To follow up</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$6,700</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 6 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">k.singh@biz.net</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-new.svg" width={16} height={16} alt="New"/> 
                          <p className="text-sm">New</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$5,779</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 7 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">d.jackson@tech.org</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-lost.svg" width={16} height={16} alt="Project lost"/> 
                          <p className="text-sm">Project lost</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$7,850</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 8 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">j.smith@app.com</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-project-won.svg" width={16} height={16} alt="Project won"/> 
                          <p className="text-sm">Project won</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$6,700</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>
               {/* Row 9 */}
               <div className="flex text-black w-full py-3 items-center">
                  <p className="w-1/3 text-sm text-left">e.brown@startup.co</p>
                  <div className="w-1/4 flex items-center">
                      <div className="flex bg-black text-white rounded-full py-[6px] px-[8px] items-center gap-2 whitespace-nowrap">
                          <Image src="/icon-contacted.svg" width={16} height={16} alt="Contacted"/> 
                          <p className="text-sm">Contacted</p>
                      </div>
                  </div>
                  <p className="w-1/6 text-sm text-right">$4,999</p>
                  <div className="w-1/6 flex justify-end"><button className="bg-gray-100 text-black rounded-md px-3 py-1 text-xs">Details</button></div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center w-full mt-4 pt-4">
                  <div className="flex items-center text-gray-500 text-sm gap-4">
                      <div className="flex items-center text-black gap-1 bg-gray-100 rounded-md px-2 py-1 cursor-pointer">
                          <p>10</p>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <p>1 to 10 of 43 leads</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                      <span className="cursor-pointer text-gray-500 hover:text-black px-1 py-1">&lt;</span>
                      <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center font-bold cursor-default">1</span>
                      <span className="text-gray-500 hover:text-black px-2 cursor-pointer">2</span>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}