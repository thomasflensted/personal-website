import React, { useState } from "react";
import me from "../assets/thomas.webp";
import landcruiser from "../assets/landcruiser.webp";
import bike from "../assets/cykel.webp";
import { AnimatePresence, motion } from "framer-motion";
import ImageHover from "./ImageHover";

const Main = () => {
  const [image, setImage] = useState<null | string>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const height = 275;

  return (
    <div className="flex items-center relative">
      <p className="content-text">
        My name is{" "}
        <ImageHover
          height={height}
          image={me}
          setImage={setImage}
          setImagePos={setImagePosition}
          text="Thomas"
        />
        . I'm a software engineer. These days I don't write much of the code
        myself - I design the system, direct AI agents to build it, and ship the
        reviewed result. Mostly TypeScript and Go with Postgres behind it, but
        whatever ships the right thing. I once spent the better part of a year
        driving a{" "}
        <ImageHover
          height={height}
          image={landcruiser}
          setImage={setImage}
          setImagePos={setImagePosition}
          text={"Land\u00a0Cruiser"}
        />{" "}
        from{" "}
        <a
          className="link"
          target="_blank"
          href="https://instagram.com/toughlens"
        >
          Denmark to Mongolia
        </a>{" "}
        and back. When I can carve out a few hours, I'm usually out{" "}
        <ImageHover
          height={height}
          image={bike}
          setImage={setImage}
          setImagePos={setImagePosition}
          text="riding"
        />
        .
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
