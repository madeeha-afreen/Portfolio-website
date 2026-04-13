"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe, MessageCircle, Send, Share2, ExternalLink } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Employee Handbook", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        { label: "Live Chat", href: "#", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#7b61ff]" />,
      text: "hello@nurui.com",
      href: "mailto:hello@nurui.com",
    },
    {
      icon: <Phone size={18} className="text-[#7b61ff]" />,
      text: "+91 86373 73116",
      href: "tel:+918637373116",
    },
    {
      icon: <MapPin size={18} className="text-[#7b61ff]" />,
      text: "Sylhet, Bangladesh",
    },
  ];

  const socialLinks = [
    { icon: <ExternalLink size={20} />, label: "Website", href: "#" },
    { icon: <MessageCircle size={20} />, label: "Messages", href: "#" },
    { icon: <Send size={20} />, label: "Send", href: "#" },
    { icon: <Share2 size={20} />, label: "Share", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="relative m-8 h-fit overflow-hidden rounded-3xl bg-[#0F0F11]/10">
      <div className="relative z-40 mx-auto max-w-7xl p-14">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-[#7b61ff]">&hearts;</span>
              <span className="text-3xl font-bold text-white">Nur/ui</span>
            </div>
            <p className="text-sm leading-relaxed">
              Nur UI is a modern React and Next.js based UI component library.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a href={link.href} className="transition-colors hover:text-[#a975ff]">
                      {link.label}
                    </a>
                    {"pulse" in link && link.pulse && (
                      <span className="absolute right-[-10px] top-0 h-2 w-2 animate-pulse rounded-full bg-[#7b61ff]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-[#a975ff]">
                      {item.text}
                    </a>
                  ) : (
                    <span className="transition-colors hover:text-[#a975ff]">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-700" />

        <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-[#a975ff]"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Nurui. All rights reserved.
          </p>
        </div>
      </div>

      <div className="-mb-36 -mt-52 hidden h-[30rem] lg:flex">
        <TextHoverEffect text="Nurui" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
