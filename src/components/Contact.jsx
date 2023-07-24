import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const fieldVariants = {
    focus: { scale: 1.02, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" },
    blur: { scale: 1, boxShadow: "none" },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)" },
    rest: { scale: 1, boxShadow: "none" },
  };

  const messageVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_1paj2dc',  // Your Service ID
        'template_5mlbph8',  // Your Template ID
        
        {
          from_name: form.name,
          to_name: "Aseel ",
          from_email: form.email,
          to_email: "aseelflihan@gmail.com",
          message: `${form.message}\n\nSender's email: ${form.email}`, // Append the sender's email to the message body
        },
        't5n0pX7wQZfA7K5fJ'  // Your User ID
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => setMessage(null), 7000); // clear message after 3 seconds
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setMessage("Ahh, something went wrong. Please try again.");
          setTimeout(() => setMessage(null), 3000); // clear message after 3 seconds
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h1 className={styles.sectionHeadText}>Contact.</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <motion.input
              variants={fieldVariants}
              whileFocus="focus"
              whileBlur="blur"
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <motion.input
              variants={fieldVariants}
              whileFocus="focus"
              whileBlur="blur"
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <motion.textarea
              variants={fieldVariants}
              whileFocus="focus"
              whileBlur="blur"
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="rest"
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>

          <AnimatePresence>
            {message && (
              <motion.div
                key={message}
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
