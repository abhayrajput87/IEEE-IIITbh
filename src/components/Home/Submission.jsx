import React from "react";
import "tailwindcss/tailwind.css";

const InfiniteScroller = () => {
  return (
    <div className="bg-green-600 text-white py-2 overflow-hidden">
      <div className="inline-block whitespace-nowrap animate-scroll">
        2nd round submission is open till 30th August 2024
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll-left 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScroller;
