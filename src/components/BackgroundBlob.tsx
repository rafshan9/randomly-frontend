export default function BackgroundBlob() {
    return (
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[600px] md:w-[900px] 
                        h-[600px] md:h-[900px] 
                        rounded-full 
                        
                        /* 1. Ensure inside is empty */
                        bg-transparent
  
                        /* 2. Control thickness of the ring here */
                        border-[40px] md:border-[60px] 
                        
                        /* 3. Color */
                        border-green-200
                        
                        /* 4. Blur (Lower this if you want a sharper line) */
                        blur-[40px] 
                        
                        opacity-60
                        animate-blob">
        </div>
      </div>
    );
  }