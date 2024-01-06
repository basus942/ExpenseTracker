import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="w-24 mb-3 bg-slate-500 h-24 rounded-xl">
      <Image
        src="/micheal.jpg"
        alt="profile picture"
        className="rounded-xl object-cover"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Avatar;
