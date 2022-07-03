import React, { useState } from "react";
import Link from "next/link";
import userData from "@constants/data";
import Image from "next/image";

const allButtons = ["All", ...new Set(userData.projects.map((item) => item.category))];

export default function Projects() {

  const [ menuItem, setMenuItems ] = useState(userData.projects);
  const [ button, setButtons ] = useState(allButtons);

  const filter = (button) =>{

    if(button === "All"){
      setMenuItems(userData.projects);
      return;
    }

    const filteredData = userData.projects.filter(item => item.category === button);
    setMenuItems(filteredData);

  }

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>

      {/* Filter buttons */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto gap-8 mt-20 pt-20 flex filterContainer">
          {
            button.map((btn, i) => {
              return(
                <button
                  className="filterBtn text-white dark:text-black"
                  key={i}
                  onClick={() => filter(btn)}
                >
                  {btn}
                </button>
              )
            })
          }
          </div>
        </div>
      

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {menuItem.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl" aria-label="Projects" target="_blank" rel="noopener">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt={title}
            layout="fill"
            loading="lazy"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
