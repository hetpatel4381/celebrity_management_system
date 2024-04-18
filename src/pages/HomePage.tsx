import { CiSearch } from "react-icons/ci";
import CelebritiesAccordian from "../components/CelebritiesAccordian";
import celebrities from "../json/celebritiesData.ts";
import { useState } from "react";
import { Celebrities } from "../components/CelebritiesAccordian.tsx";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [celeb, setCeleb] = useState<Celebrities[]>(celebrities);

  const toggleAccordion = (index: number) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter celebrities based on search query
  const filteredCelebrities = celeb.filter((celebrity) =>
    `${celebrity.first} ${celebrity.last}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

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
            className="border-none focus:outline-none rounded-lg px-2 w-full"
            placeholder="Search user"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          />
        </div>
        {filteredCelebrities.map((celebrity, index) => (
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
