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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        "Adsbl", 
        "template_1",
        {
          from_name: `${formData.firstname} ${formData.name}`,
          reply_to: formData.email,
          message: formData.message,
        },
        "JinuVfX-BcozGsZbk"
      );
      
      toast.success("Message envoyé avec succès !");
      
      setFormData({
        firstname: "",
        name: "",
        email: "",
        message: "",
      });
      
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
      console.error(error);
    }
  };

  const notify = () =>
    toast.success("Message envoyé avec succès !", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="py-32 bg-blue-100">
      <div className="container">
        <h2 className="text-5xl font-bold text-center text-[#009de0] dark:text-slate-300 pb-8">
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
              placeholder="prénom"
              required
              autoComplete="off"
              onChange={handleChange}
              className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg capitalize"
            />
            <input
              type="text"
              id="name"
              placeholder="Nom"
              required
              autoComplete="off"
              onChange={handleChange}
              className="w-full mt-3 md:mt-0 md:ml-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg uppercase"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
            onChange={handleChange}
            className="w-full rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
            required
            autoComplete="off"
            onChange={handleChange}
            className="w-full h-52 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-300 shadow-md p-2 text-lg resize-none font-sans"
          />
          <button
            // onClick={notify}
            type="submit"
            className="mt-4 px-6 py-2 rounded-lg text-lg border-none bg-red-500 hover:bg-red-700 text-slate-100 hover:text-white shadow-md cursor-pointer"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
