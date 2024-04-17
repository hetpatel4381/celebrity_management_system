import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Collapse } from "react-collapse";
import celebrities from "../json/celebritiesData";

interface Celebrities {
  id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
}

interface CelebritiesAccordianProps {
  celebrity: Celebrities;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const CelebritiesAccordian: React.FC<CelebritiesAccordianProps> = ({
  celebrity,
  isOpen,
  toggleAccordion,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedCeleb, setEditedCeleb] = useState<Celebrities>({ ...celebrity });

  const handleDelete = () => {
    const updatedCelebrities = celebrities.filter(
      (celeb) => celeb.id !== celebrity.id
    );
    // setEditedCeleb(updatedCelebrities);
  };

  const handleSave = () => {
    // Implement save functionality
    // You can save the editedCeleb state here
    setIsEditMode(false);
  };

  const calculateAge = (dob: string) => {
    const diff = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: keyof Celebrities
  ) => {
    const { value } = e.target;
    setEditedCeleb((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      const dateString = date.toISOString().split("T")[0];
      setEditedCeleb((prevState) => ({
        ...prevState,
        dob: dateString,
      }));
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            src={celebrity.picture}
            alt={`${celebrity.first} ${celebrity.last}`}
            className="h-12 w-12 rounded-full mr-4"
          />
          <h3 className="text-lg font-semibold">{`${celebrity.first} ${celebrity.last}`}</h3>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </div>
      <Collapse isOpened={isOpen}>
        <div className="p-4">
          {isEditMode ? (
            <div className="flex flex-row justify-between gap-2">
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-700">Age</label>
                <DatePicker
                  selected={new Date(editedCeleb.dob)}
                  onChange={handleChangeDate}
                  className="mt-1 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="text-lg font-medium text-gray-700">
                  Gender
                </label>
                <select
                  value={editedCeleb.gender}
                  onChange={(e) => handleChange(e, "gender")}
                  className="mt-1 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="rather_not_to_say">Rather Not to Say</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-lg font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  value={editedCeleb.country}
                  onChange={(e) => handleChange(e, "country")}
                  className="mt-1 px-3 py-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-between mb-4">
              <p className="text-sm font-medium text-gray-700 flex flex-col">
                Age
                <span className="text-black">
                  {calculateAge(celebrity.dob)} Years
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700 flex flex-col">
                Gender
                <span className="text-black">{celebrity.gender}</span>
              </p>
              <p className="text-sm font-medium text-gray-700 flex flex-col">
                Country
                <span className="text-black">{celebrity.country}</span>
              </p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            {isEditMode ? (
              <textarea
                value={editedCeleb.description}
                onChange={(e) => handleChange(e, "description")}
                className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            ) : (
              <p className="mt-1 px-3 py-2 w-full rounded-md">
                {celebrity.description}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            {!isEditMode && (
              <RiDeleteBinLine
                className="text-red-600 mr-2 cursor-pointer"
                onClick={() => handleDelete}
              />
            )}
            {!isEditMode ? (
              <BsPencil
                className="text-blue-600 cursor-pointer"
                onClick={() => setIsEditMode(true)}
              />
            ) : (
              <button
                className="text-blue-600 cursor-pointer"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default CelebritiesAccordian;
