import React from "react";

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  maxIndicatorVisible?: number;
  onSetActiveIndex: (index: number) => void;
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = length,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length;

  return (
    <div className="absolute left-1/2 top-[72%] flex h-5 w-24 -translate-x-1/2 transform items-center justify-center space-x-1 ;">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          <div
            key={index}
            className={` h-2 w-2 rounded-full  border-black opacity-50  transition-all duration-500 hover:w-4 hover:opacity-100 
            ${activeIndex === index ? "w-4 bg-[#373738]" : "w-2 bg-gray-500"}`}
            onClick={() => {
              onSetActiveIndex(index);
            }}
          ></div>
        );
      })}
    </div>
  );
}
