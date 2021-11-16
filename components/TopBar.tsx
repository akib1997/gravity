import React from "react";

const TopBar: React.FC = () => {
  return (
    <>
      <div className="bg-[#E2E2E2] p-3 flex space-x-4 rounded-tl-sm rounded-tr-sm relative z-20">
        <div className="flex space-x-2">
          <span className="block w-4 h-4 rounded-full bg-[#FF6666]"></span>
          <span className="block w-4 h-4 rounded-full bg-[#FFA600]"></span>
          <span className="block w-4 h-4 rounded-full bg-[#61E786]"></span>
        </div>
        <div className="w-full h-4 bg-white rounded"></div>
      </div>
    </>
  );
};

export default TopBar;
