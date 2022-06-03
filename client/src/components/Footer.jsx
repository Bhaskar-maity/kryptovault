import React from "react";

const devTeam = [
  "Rupam Hari",
  "Bhaskar Maity",
  "Arushi Ballav",
  "Proshanta Debnath",
];

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        <div className="dev-team">
          ----------- Dev Team -----------
          <div className="names">
            {devTeam.map((item, index) => (
              <span key={item + index}>{item}</span>
            ))}
          </div>
        </div>
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@KryptoVault</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
