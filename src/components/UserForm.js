import React, { useState } from "react";

const UserForm = () => {
  const boxes = Array.from({ length: 20 }, (_, index) => index + 1);


  return (
    <div className="flex flex-wrap">
    {boxes.map((box, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
        <div className="bg-gray-200 h-20 flex items-center justify-center rounded-md">
          {box}
        </div>
      </div>
    ))}
  </div>
  );
};

export default UserForm;