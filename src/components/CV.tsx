import React from "react";
import { marked } from "marked";
import cv from "../cv.md?raw";

const html = marked.parse(cv, { async: false });

const CV = () => {
  return <div className="cv" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default CV;
