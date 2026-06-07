import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { Button } from "../ui/button";

import clsx from "clsx";
import "./Contact.modules.scss";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !message) return;

    const subject = name?.trim()
      ? `Hi Subhan Nizar — ${name.trim()}`
      : "Hi Subhan Nizar";
    const body = `From: ${name || "-"}\nEmail: ${email}\n\n${message}`;
    const link = `mailto:subhannizar25@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

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
    <section className="py-14 w-full container contact-section" id="contact">
      <div className="w-full flex flex-col gap-y-16 justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 items-center justify-center">
          <h1 className="text-4xl text-center md:text-left">Let&apos;s talk</h1>
          <p className="text-center md:text-left">
            For collaborations or opportunities, send a quick message.
          </p>
          <Form.Root
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 justify-center"
          >
            <Form.Field name="name" className="w-full">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-3 py-2 h-10 leading-tight focus:outline-none focus:bg-white"
                placeholder="Your name (optional)"
              />
            </Form.Field>
            <Form.Field name="email" className="w-full">
              <Form.Control
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-3 py-2 h-10 leading-tight focus:outline-none focus:bg-white"
                placeholder="Your email"
              />
            </Form.Field>
            <Form.Field name="message" className="w-full">
              <Form.Control asChild required>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-3 py-2 min-h-[8rem] leading-tight focus:outline-none focus:bg-white"
                  placeholder="Tell me about your project, timeline, and what you need help with."
                />
              </Form.Control>
            </Form.Field>
            <div className="w-full flex justify-center">
              <Button variant={"destructive"} type="submit" className="w-full">
                Send Email
              </Button>
            </div>
          </Form.Root>
          <div className="text-sm text-white/70 text-center">
            <span>Mataram, Nusa Tenggara Barat, Indonesia · </span>
            <span>+62 813 5399 5458</span>
          </div>
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
