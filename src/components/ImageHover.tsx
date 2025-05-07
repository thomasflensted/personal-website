import React, { Dispatch, SetStateAction } from "react";
import { useScreenDimensions } from "../hooks/useScreenDimensions";

type Props = {
  image: string;
  setImage: Dispatch<SetStateAction<string | null>>;
  setImagePos: Dispatch<SetStateAction<{ x: number; y: number }>>;
  text: string;
  height: number;
};

const ImageHover = ({ image, setImage, setImagePos, text, height }: Props) => {
  const { bottom, right } = useScreenDimensions();
  const [horizontalOffset, verticalOffset] = [10, 20];
  const totalImageWidth = height + horizontalOffset;
  const borderOffset = 50;

  const getHorizontalPosition = (cursorPos: number) => {
    if (right - cursorPos < totalImageWidth + borderOffset) {
      return cursorPos - height - horizontalOffset;
    }
    return cursorPos + horizontalOffset;
  };

  const getVerticalPosition = (cursorPos: number) => {
    if (bottom - cursorPos < totalImageWidth + borderOffset) {
      return cursorPos - height - verticalOffset;
    }
    return cursorPos + verticalOffset;
  };

  const handleImagePosition = (e: React.MouseEvent) => {
    const x = getHorizontalPosition(e.clientX);
    const y = getVerticalPosition(e.clientY);
    setImagePos({ x, y });
  };

  return (
    <>
      <span className="md:hidden">{text}</span>
      <span
        onMouseOver={() => setImage(image)}
        onMouseLeave={() => setImage(null)}
        onMouseMove={handleImagePosition}
        className="hidden md:inline cursor-default italic font-normal text-blue-700"
      >
        {text}
      </span>
    </>
  );
};
export default ImageHover;
