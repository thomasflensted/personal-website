import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  url: string;
  text: string;
  isExternal?: boolean;
};

const AnimatedLink = ({ url, text, isExternal }: Props) => {
  return (
    <span className="relative">
      <a
        className="link underline-animation relative"
        target="_blank"
        href={url}
      >
        {text}
        <div className="border bg-red-200 absolute bottom-0" />
      </a>
    </span>
  );
};
export default AnimatedLink;
