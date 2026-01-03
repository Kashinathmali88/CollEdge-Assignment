import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useContactContext } from "../context/ContactContext";

const ContactForm = () => {
  const { addNewContact } = useContactContext();
  const [data, setData] = useState({ email: "", phone: "", message: "" });

  const handelSubmit = (e) => {
    e.preventDefault();
    addNewContact(data);
  };

  return (
    <div>
      <h1 className="text-xl text-manhattan-900 font-semibold">
        Contact Information
      </h1>
      <form
        onSubmit={(e) => handelSubmit(e)}
        className="flex flex-col gap-2 mt-3"
      >
        <input
          className="w-full px-4 py-2 rounded-md bg-manhattan-300 border border-manhattan-500 placeholder:text-manhattan-50 outline-manhattan-800"
          type="tel"
          placeholder="+91 9874563215"
          value={data.phone}
          pattern="[0-9]{10}"
          minLength="10"
          maxLength="10"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          name="phone"
          id="phone"
          required
        />
        <input
          className="w-full px-4 py-2 rounded-md bg-manhattan-300 border border-manhattan-500 placeholder:text-manhattan-50 outline-manhattan-800"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="abc@gamil.com"
          name="email"
          id="email"
          required
        />
        <input
          className="w-full px-4 py-2 rounded-md bg-manhattan-300 border border-manhattan-500 placeholder:text-manhattan-50 outline-manhattan-800"
          type="text"
          placeholder="Enter your message..."
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          name="mssagae"
          id="message"
        />
        <button className="py-2 w-full text-xl flex items-center justify-center gap-2 cursor-pointer rounded-md bg-manhattan-400 mt-4 text-manhattan-100 hover:bg-manhattan-600 hover:text-manhattan-50 active:scale-95">
          Add <IoIosAdd className="size-7" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
