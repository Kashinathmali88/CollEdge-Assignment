import Contact from "../models/contact.model.js";

export const addContact = async (req, res) => {
  try {
    const { email, phone, message } = req.body;
    if (!email && !phone) {
      return res
        .status(400)
        .json({ success: false, message: "some field are missing" });
    }
    const exitingContact = await Contact.findOne({
      email,
      phone,
    });

    if (exitingContact) {
      return res
        .status(400)
        .json({ success: false, message: "contact exites already" });
    }
    const newContact = await Contact.create({
      email,
      phone,
      message,
    });

    if (!newContact) {
      return res
        .status(400)
        .json({ success: false, message: "failed to create contact" });
    }

    return res
      .status(200)
      .json({ success: true, message: "contact created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getContact = async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({ _id: -1 });
    if (!allContacts.length) {
      return res
        .status(400)
        .json({ success: false, message: "no contact found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "all contact", allContacts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
