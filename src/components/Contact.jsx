import React, { useState } from "react";
import { formspreeUrl, social_media } from "../data";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal/Reveal";


function Contact() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully");
        setIsSubmitted(true);
        setFormData(initialFormData); // Clear the form inputs
      } else {
        // Handle error
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section id="contact">
      <div className={'flex justify-center'}>
        <div>
          <h2 className={'text-green text-4xl text-center'}>
            Contact
          </h2>
          <div className={"flex justify-center"}>
                {social_media.map((social, index) => (
                  <Reveal delay={(index + 5) / 25}>
                    <Icon
                      className={
                        "text-foreground text-6xl hover:text-pink transition .3"
                      }
                      key={index}
                      icon={social.icon}
                      onClick={() => {
                        window.location.href = social.link;
                      }}
                    ></Icon>
                  </Reveal>
                ))}
              </div>
              <a href="mailto:moraton.eduardo@gmail.com" className={'text-foreground text-xl'}>moraton.eduardo@gmail.com</a>
        </div>
        
      </div>
      <div className={"w-full h-[500px] flex items-center justify-center"}>
        <form
          onSubmit={handleSubmit}
          className={"w-[500px] bg-currentLine p-5 rounded-lg"}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-foreground font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-transparent rounded-md focus:outline-none focus:border-purple focus:border-2 transition"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-foreground font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-transparent rounded-md focus:outline-none focus:border-purple focus:border-2 transition"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-foreground font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border-2 border-transparent rounded-md focus:outline-none focus:border-purple focus:border-2 transition"
              required
            ></textarea>
          </div>
          {isSubmitted ? (
            <div className="bg-green p-4 rounded-md mb-4">
              Thank you! Your message has been sent.
            </div>
          ) : null}
          <div className={'w-full flex justify-end'}>
            <button
              type="submit"
              className=" text-foreground px-4 py-2 border hover:bg-pink transition"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default Contact;
