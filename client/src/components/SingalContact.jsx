import React from "react";
import { IoMdContact } from "react-icons/io";

const SingalContact = ({ contact }) => {
  return (
    <div className="flex items-center gap-4 p-1 rounded-md bg-manhattan-800 hover:bg-manhattan-700">
      <IoMdContact className="size-10 fill-manhattan-200" />
      <div className="text-xl text-manhattan-200">
        <h1 className="font-semibold">
          <span>+91 </span>
          {contact?.phone}
        </h1>
        <p className="text-xs text-manhattan-100">{contact?.email}</p>
      </div>
    </div>
  );
};

export default SingalContact;
