"use client";

import { motion } from "framer-motion";
import { useState } from 'react'; // ADDED: Import useState for form status
import SectionWrapper from "../components/section-wrapper";

export default function Contact() {
  const [status, setStatus] = useState(''); // State for success/error messages

  // Your specific Formspree endpoint ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/movrgpzy"; 

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Set status to sending

    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Clear the form fields on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };


  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="space-y-3 text-sm text-slate-300"
        >
          <p>Let&apos;s connect for internships, projects, or collaborations.</p>
          <ul className="space-y-1 text-xs">
            <li>Phone: +91 93639 99370</li>
            <li>Email: priyadharshan80q@gmail.com</li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass space-y-3 rounded-2xl p-5 text-sm text-slate-200"
          onSubmit={handleSubmit} // ADDED: Handle form submission
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-slate-400">Name</label>
              <input
                id="name"
                name="name" // ADDED: name attribute for Formspree
                className="w-full rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-2 text-xs outline-none focus:border-neon"
                placeholder="Your name"
                required // ADDED: HTML required attribute
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs text-slate-400">Email</label>
              <input
                id="email"
                type="email"
                name="_replyto" // ADDED: name attribute, using _replyto is recommended for email reply
                className="w-full rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-2 text-xs outline-none focus:border-neon"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-xs text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              name="message" // ADDED: name attribute for Formspree
              className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-2 text-xs outline-none focus:border-neon"
              placeholder="Tell me about your idea..."
              required
            />
          </div>
          
          {/* ADDED: Submission Status Messages */}
          {status === 'success' && (
            <p className="text-neon text-xs font-semibold">Message sent successfully! Thank you.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-xs font-semibold">Oops! There was an error sending the message.</p>
          )}
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={status === 'sending'} // Disable while sending
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-neon px-5 py-2 text-xs font-medium text-slate-950 shadow-glow disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}