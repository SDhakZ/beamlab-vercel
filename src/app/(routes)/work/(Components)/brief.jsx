import React from "react";
import { useEffect, useState, useRef } from "react";
import { highlightText } from "@/app/utility/highlightText";

export default function Brief(props) {
  const { briefText, dark, title } = props;
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const updateCursorPos = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPos);

    return () => {
      document.removeEventListener("mousemove", updateCursorPos);
    };
  }, []);

  return (
    <div
      onMouseMove={updateCursorPos}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={sectionRef}
      className="w-full relative  max-w-[1100px]"
    >
      <div
        className={`relative px-6 py-6 sm:py-8 sm:px-10 md:py-12 sm:absolute ${
          dark ? "bg-black-shade-400" : "bg-background-white"
        } md:px-14`}
      >
        <h2
          className={`text-base font-semibold w-fit ${
            dark ? "text-white-shade-100" : "text-black-shade-300"
          } `}
        >
          {title}{" "}
          <hr
            className={`block w-full h-[0.1rem] mt-1  ${
              dark ? "bg-white-shade-100" : "bg-black-shade-300"
            } `}
          ></hr>
        </h2>

        <p
          className={`text-xl ${
            dark ? "text-white-shade-100" : "text-black-shade-300"
          } font-normal leading-relaxed sm:leading-normal sm:text-3xl mt-7 `}
        >
          {highlightText(
            briefText,
            "text-black-shade-300",
            "bg-[rgba(251,226,1,0.92)]"
          )}
        </p>
      </div>

      <div
        className={`hidden px-6 py-6 sm:py-8 sm:px-14 md:py-12 sm:block sm:visible ${
          dark
            ? "bg-white-shade-100 text-white-shade-100 hover:text-black-shade-300"
            : "bg-black-shade-300 text-black-shade-200 hover:text-white-shade-300"
        }`}
        style={{
          clipPath: isHovering
            ? `circle(70px at ${cursorPos.x}px ${cursorPos.y}px)`
            : "none",
        }}
      >
        <h2 className="text-base font-semibold w-fit ">
          {title}{" "}
          <hr
            className={`block w-full h-[0.1rem] mt-1 ${
              dark ? "bg-black-shade-100" : "bg-white-shade-100"
            } `}
          ></hr>
        </h2>

        <p
          className={`text-xl font-normal ${
            dark ? "text-black-shade-100" : "text-white-shade-100"
          } leading-relaxed sm:leading-normal sm:text-3xl mt-7`}
        >
          {highlightText(briefText, "text-white-shade-200", "bg-[#FFAD4F]")}
        </p>
      </div>
    </div>
  );
}
