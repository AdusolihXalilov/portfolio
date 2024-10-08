import React from "react";

const Loader = () => {
  return (
    <div className=" mt-[330px] sm:mt-[300px]">
      <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div class="w-20 h-20 border-4 border-transparent text-[#FACC15] text-4xl animate-spin flex items-center justify-center border-t-[#FACC15] rounded-full">
          <div class="w-16 h-16 border-4 border-transparent text-slate-800 text-2xl animate-spin flex items-center justify-center border-t-slate-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
