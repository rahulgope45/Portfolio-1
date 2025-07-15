import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5743mmr', 'template_c1t2vew', form.current, {
        publicKey: 'Blpte23f_C6o0prOS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

return (
    <section className="min-h-screen flex items-center justify-center p-4"
    id="Contact"
    >
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_8px_2px_#3b82f6] transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_8px_2px_#3b82f6] transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_8px_2px_#3b82f6] transition"
              placeholder="Your message..."
            />
          </div>

          <div className="text-center mt-4">
            <input
              type="submit"
              value="Send Message"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
            />
          </div>
        </form>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/rahulgope45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-gope-808476369/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      
      </div>
    </section>
  );
};