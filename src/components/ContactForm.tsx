import { toast } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";


emailjs.init("JinuVfX-BcozGsZbk");

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    console.log(newFormData);
  };

  const clearInput = () => {
    const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
    inputs.forEach(input => {
      input.value = '';
    });

    setFormData({
      firstname: "",
      name: "",
      email: "",
      message: "",
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        "Adsbl", 
        "template_1",
        {
          firstname: formData.firstname.charAt(0).toUpperCase() + formData.firstname.slice(1),
          name: formData.name.toUpperCase(),
          email: formData.email,
          message: formData.message,
        },
        "JinuVfX-BcozGsZbk"
      );
      toast.success("Message envoyé avec succès !");
      
      clearInput()

      
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
      console.error(error);
    }
  };


  return (
    <div className="py-20 md:py-32 bg-blue-100 dark:bg-[#18181a]">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#009de0] dark:text-slate-300 pb-8">
          Contactez-nous
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center [&>*:not(:last-child)]:mb-3 max-w-[1000px] mx-auto"
        >
          <div className="flex flex-col md:flex-row w-full">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="prénom*"
              required
              autoComplete="off"
              onChange={handleChange}
              className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg capitalize dark:bg-[#242526]"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom*"
              required
              autoComplete="off"
              onChange={handleChange}
              className="w-full mt-3 md:mt-0 md:ml-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg uppercase dark:bg-[#242526]"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            required
            autoComplete="off"
            onChange={handleChange}
            className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg dark:bg-[#242526]"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Votre message*"
            required
            autoComplete="off"
            onChange={handleChange}
            className="w-full h-52 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg resize-none font-sans dark:bg-[#242526]"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 rounded-lg text-lg border-none bg-red-500 hover:bg-red-700 dark:bg-red-900 hover:dark:bg-red-950 text-slate-100 hover:text-white shadow-md cursor-pointer"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
