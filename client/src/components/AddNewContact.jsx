import React from "react";
import { IoIosAdd } from "react-icons/io";
import { useContactContext } from "../context/ContactContext";

const AddNewContact = () => {
  const { setContactForm } = useContactContext();
  return (
    <div className="w-full mb-2">
      <button
        onClick={() => setContactForm((prev) => !prev)}
        className="py-2 w-full flex-center rounded-md bg-manhattan-600 text-xl text-manhattan-50 active:scale-95 cursor-pointer hover:bg-manhattan-800"
      >
        Add New Contact
        <IoIosAdd className="size-7" />
      </button>
    </div>
  );
};

export default AddNewContact;
