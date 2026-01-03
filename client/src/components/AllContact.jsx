import ContactForm from "./ContactForm";
import React, { useEffect } from "react";
import SingalContact from "./SingalContact";
import { useContactContext } from "../context/ContactContext";

const AllContact = () => {
  const { contactForm, contacts, getContacts } = useContactContext();

  useEffect(() => {
    getContacts();
  }, []);

  return !contactForm ? (
    <div className="flex flex-col gap-2 max-h-96 overflow-y-scroll">
      {contacts?.map((contact) => {
        return <SingalContact key={contact._id} contact={contact} />;
      })}
    </div>
  ) : (
    <ContactForm />
  );
};

export default AllContact;
