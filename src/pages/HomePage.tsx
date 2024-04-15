import { CiSearch } from "react-icons/ci";
import celebrities from "../json/celebritiesData";

const HomePage = () => {

  return (
    <>
      <div className="flex flex-col w-[50%] justify-start m-auto gap-1">
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
      </div>
    </>
  );
};

export default HomePage;
