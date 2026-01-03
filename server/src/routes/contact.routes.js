import express from "express";
import { addContact, getContact } from "../controller/contact.controller.js";

const contactRoute = express.Router();

contactRoute.post("/add", addContact);
contactRoute.get("/get", getContact);

export default contactRoute;
