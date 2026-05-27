"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your backend/email logic here
    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-udemy-dark-bg text-white">
      {/* Hero Section */}
      <section className="container-app section-app py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Contact AlgoBuddy
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
            Let’s Connect
          </h1>

          <p className="mt-4 text-udemy-dark-muted text-lg leading-relaxed">
            Have feedback, suggestions, bug reports, or collaboration ideas?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-app pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Info Card */}
          <div className="bg-udemy-dark-surface border border-udemy-dark-border rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-udemy-dark-muted text-sm">
                    singhps588@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-udemy-dark-muted text-sm">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-udemy-dark-muted text-sm">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-4">Connect Socially</h3>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/PankajSingh34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-udemy-dark-border flex items-center justify-center text-udemy-dark-muted hover:text-white hover:border-white transition"
                >
                  <Github size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/pankaj-singh-2a968b212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-udemy-dark-border flex items-center justify-center text-udemy-dark-muted hover:text-white hover:border-white transition"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-udemy-dark-surface border border-udemy-dark-border rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-udemy-dark-bg border border-udemy-dark-border px-4 py-3 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-udemy-dark-bg border border-udemy-dark-border px-4 py-3 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded-xl bg-udemy-dark-bg border border-udemy-dark-border px-4 py-3 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-udemy-dark-bg border border-udemy-dark-border px-4 py-3 outline-none focus:border-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:opacity-90 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Back Home */}
        <div className="mt-10 text-center">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
