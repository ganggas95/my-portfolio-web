import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { Button } from "../ui/button";

import clsx from "clsx";
import "./Contact.modules.scss";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    var link =
      "mailto:subhannizar25@gmail.com" +
      "?cc=subhannizar25@gmail.com" +
      "&subject=" +
      encodeURIComponent("Hi Subhan Nizar") +
      "&body=" +
      encodeURIComponent(email);
    window.location.href = link;
  };

  const socialMedias = [
    {
      classNames: "bg-github hover:bg-github/90",
      name: "Github",
      img: "/logo/github.png",
      url: "https://github.com/ganggas95",
    },
    {
      classNames: "bg-linkedin hover:bg-linkedin/90",
      name: "LinkedIn",
      img: "/logo/linkedin.png",
      url: "https://www.linkedin.com/in/subhan-nizar-15a027131/",
    },
  ];
  return (
    <section
      className="py-4 w-full contact-section px-14 md:px-24 flex items-center"
      id="contact"
    >
      <div className="w-full flex flex-col gap-y-24 justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 items-center justify-center">
          <h1 className="text-4xl text-center md:text-left">
            Let&apos;s talk
          </h1>
          <p className="text-center md:text-left">
            If you want to get closer, collaborate, or just say Hi, please fill
            in the form below.
          </p>
          <Form.Root
            onSubmit={handleSubmit}
            className="w-full flex flex-col md:flex-row gap-2 justify-center"
          >
            <Form.Field name="email" className="w-full md:w-2/5">
              <Form.Control
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-3 py-2 h-10 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter your email"
              />
            </Form.Field>
            <Button variant={"destructive"} type="submit">
              Contact me
            </Button>
          </Form.Root>
        </div>
        <div className="w-full flex flex-col gap-y-4 justify-center">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-2xl text-center">Let&apos;s get social</h3>
            <p className="text-center">Follow me on my social media</p>
          </div>
          <ul className="flex gap-x-1 justify-center items-center">
            {socialMedias.map((socialMedia, index) => (
              <li key={index}>
                <Button
                  className={clsx({
                    [socialMedia.classNames]: true,
                    "flex items-center gap-x-2": true,
                  })}
                  onClick={() => {
                    window.open(socialMedia.url, "_blank");
                  }}
                >
                  <div
                    className="h-4 w-4 bg-contain"
                    style={{
                      backgroundImage: `url(${socialMedia.img})`,
                    }}
                  />
                  <span>{socialMedia.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
