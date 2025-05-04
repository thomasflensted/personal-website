import React, { useState, MouseEvent } from "react";
import me from "../assets/IMG_3212.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "./links";

const Main = () => {
  const [showImage, setShowImage] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setImagePosition({ x: e.clientX + 10, y: e.clientY + 20 });
  };

  return (
    <div className="flex items-center relative">
      <p className="content-text">
        My name is{" "}
        <span
          onMouseOver={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
          onMouseMove={handleMouseMove}
          className="cursor-default italic font-normal"
        >
          Thomas
        </span>
        . I am a full-stack engineer. {links[0]} are some of the projects I've
        made. I used to work in communications, mostly doing {links[1]}. On the
        side, I've made a few YouTube {links[2]} about things I find
        interesting. In 2023, my girlfriend and I spent 10 months driving from{" "}
        {links[3]} and back. Sometimes, I post longer {links[4]} from my
        travels. If you want to work with me or just say hi 👋, get in touch on
        one of the links below.
      </p>
      <AnimatePresence>
        {showImage && (
          <motion.img
            className="fixed w-1/5 rounded-xl shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            style={{
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
            }}
            src={me}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
