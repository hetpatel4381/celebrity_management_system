import { CiSearch } from "react-icons/ci";
import CelebritiesAccordian from "../components/CelebritiesAccordian";
import celebrities from "../json/celebritiesData.ts";

const HomePage = () => {
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
        {celebrities.map((celebrity) => (
          <CelebritiesAccordian key={celebrity.id} celebrity={celebrity} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
