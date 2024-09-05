// components/CustomCursor.js
import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.getElementById("custom-cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div id="custom-cursor" className="cursor"></div>;
};

export default CustomCursor;
