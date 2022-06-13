import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const devTeam = [
  {
    id: 1,
    name: "Rupam Hari",
    githubLink: "https://github.com/hrupam",
  },
  {
    id: 2,
    name: "Bhaskar Maity",
    githubLink: "https://github.com/Bhaskar-maity",
  },
  {
    id: 3,
    name: "Arushi Ballav",
    githubLink: "https://github.com/arushiballav24036",
  },
  {
    id: 4,
    name: "Proshanta Debnath",
    githubLink: "https://github.com/ProshantaDebnath",
  },
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
            {devTeam.map((dev) => (
              <Tippy placement="right" content={<span>GitHub Link</span>}>
                <a
                  href={dev.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  key={dev.id}
                >
                  {dev.name}
                </a>
              </Tippy>
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
