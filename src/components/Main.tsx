import React, { useState } from "react";
import me from "../assets/thomas.webp";
import landcruiser from "../assets/landcruiser.webp";
import bike from "../assets/cykel.webp";
import { AnimatePresence, motion } from "framer-motion";
import ImageHover from "./ImageHover";

// Fetch and decode the hover images when the component mounts, so the first
// hover animates instead of waiting on the network. Defined at module level so
// the ref callback is stable and only runs on mount.
const preloadImages = (node: HTMLDivElement | null) => {
  if (!node) return;
  [me, landcruiser, bike].forEach((src) => {
    const img = new Image();
    img.src = src;
    img.decode().catch(() => {});
  });
};

const Main = () => {
  const [image, setImage] = useState<null | string>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const height = 275;

  return (
    <div ref={preloadImages} className="flex items-center relative">
      <p className="content-text">
        My name is{" "}
        <ImageHover
          height={height}
          image={me}
          setImage={setImage}
          setImagePos={setImagePosition}
          text="Thomas"
        />{" "}
        and I'm a software engineer. I live in Copenhagen. These days AI agents
        write all of my code, and my job is deciding what gets built and how it
        gets done. I once spent the better part of a year driving a{" "}
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
        and back. When I have a free morning or afternoon, I'm usually out{" "}
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
