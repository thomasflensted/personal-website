import React, { useState, MouseEvent } from "react";
import me from "../assets/thomas.webp";
import landcruiser from "../assets/landcruiser.webp";
import august from "../assets/august.webp";
import bike from "../assets/cykel.webp";
import { AnimatePresence, motion } from "framer-motion";
import ImageHover from "./ImageHover";
import { Link } from "react-router-dom";

const Main = () => {
  const [image, setImage] = useState<null | string>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const height = 275;

  return (
    <div className="flex items-center relative">
      <p className="content-text">
        My name is&nbsp;
        <ImageHover
          height={height}
          image={me}
          setImage={setImage}
          setImagePos={setImagePosition}
          text="Thomas"
        />
        . I am a full-stack engineer.&nbsp;
        <Link to="/" className="link underline-animation">
          These
        </Link>
        &nbsp; are some of the projects I've built. I love thinking about and
        writing code - and I'm always working on at least one side project when
        I'm not at my day job. In 2023, my girlfriend and I spent most of the
        year driving a&nbsp;
        <ImageHover
          height={height}
          image={landcruiser}
          setImage={setImage}
          setImagePos={setImagePosition}
          text="Land Cruiser"
        />
        &nbsp;from&nbsp;
        <a
          className="link underline-animation"
          target="_blank"
          href="https://instagram.com/toughlens"
        >
          Denmark to Mongolia
        </a>
        &nbsp;and back. Sometimes, I post longer&nbsp;
        <a
          className="link underline-animation"
          target="_blank"
          href="https://thomasflensted.exposure.co/"
        >
          photo series
        </a>
        &nbsp;from my travels.
        <span className="hidden md:inline">
          &nbsp;When I'm not writing code, I am usually out&nbsp;
          <ImageHover
            height={height}
            image={bike}
            setImage={setImage}
            setImagePos={setImagePosition}
            text="riding"
          />
          &nbsp;or taking care of&nbsp;
          <ImageHover
            height={height}
            image={august}
            setImage={setImage}
            setImagePos={setImagePosition}
            text="this guy."
          />
        </span>
        &nbsp;If you want to work with me or just say hi 👋, get in touch on one
        of the links below.
      </p>
      <AnimatePresence>
        {image && (
          <motion.img
            className="fixed rounded-xl shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            style={{
              left: `${imagePosition.x}px`,
              top: `${imagePosition.y}px`,
              height: `${height}px`,
            }}
            src={image}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
