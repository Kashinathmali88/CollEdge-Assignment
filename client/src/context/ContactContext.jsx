import axios from "axios";
import toast from "react-hot-toast";
import { createContext, useContext, useEffect, useState } from "react";

const contactContext = createContext();

export const ContactContextProvider = ({ children }) => {
  const [contactForm, setContactForm] = useState(false);
  const [contacts, setContacts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASEURL;

  const getContacts = async () => {
    try {
      const responces = await axios.get(`${baseUrl}/api/v1/contact/get`);
      if (responces.data.success) {
        setContacts(responces.data.allContacts);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addNewContact = async (data) => {
    try {
      const responces = await axios.post(`${baseUrl}/api/v1/contact/add`, data);
      if (responces.data.success) {
        getContacts();
        setContactForm(false);
        toast.success(responces.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    contactForm,
    setContactForm,
    baseUrl,
    getContacts,
    contacts,
    setContacts,
    addNewContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(contactContext);
};
