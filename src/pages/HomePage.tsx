import { CiSearch } from "react-icons/ci";
import CelebritiesAccordian from "../components/CelebritiesAccordian";
import celebrities from "../json/celebritiesData.ts";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null); // Explicitly define the type of isOpen

  const toggleAccordion = (index: number) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index)); // Use a ternary operator to toggle isOpen
  };

  return (
    <>
      <div className="flex flex-col w-[50%] justify-start m-auto gap-2">
        <h1>List View</h1>
        <div className="flex flex-row items-center border border-gray-400 rounded-lg px-2">
          <div className="relative text-gray-500 cursor-pointer text-lg">
            <CiSearch />
          </div>
          <input
            type="text"
            className="border-none focus:outline-none rounded-lg px-2"
            placeholder="Search user"
          />
        </div>
        {celebrities.map((celebrity, index) => (
          <CelebritiesAccordian
            isOpen={index === isOpen}
            key={index}
            toggleAccordion={() => toggleAccordion(index)}
            celebrity={celebrity}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
