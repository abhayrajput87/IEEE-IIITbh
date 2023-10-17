import React from 'react'

function TextAnimation() {
  return (
    <div>
         <div className="bg-[#332970]  w-screen box-border  p-4 flex items-center overflow-hidden fixed bottom-0">
        <div className="animate">
          {
            [0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
              <div className="text-[#139bac] whitespace-nowrap inline-flex items-center justify-center">• NEW SITE LAUNCHING SOON&nbsp;</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TextAnimation;