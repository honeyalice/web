import React, { useEffect } from "react";

export const BlobCursor=()=> {
  useEffect(() => {
    const cursor = document.querySelector("#cursor-blob");
    const link = document.querySelector("a");


    const setCursorPos = (e) => {
      let posX = e.pageX;
      let posY = e.pageY;

      cursor.style.top = posY - cursor.offsetHeight / 2 + "px";
      cursor.style.left = posX - cursor.offsetWidth / 2 + "px";
    };

    document.addEventListener("mousemove", setCursorPos);

    const setCursorHover = function () {
      cursor.style.transform = "scale(2.5)";
    };

    const removeCursorHover = function () {
      cursor.style.transform = "";
    };

    link.addEventListener("mouseover", setCursorHover);
    link.addEventListener("mouseleave", removeCursorHover);
    

    return () => {
      document.removeEventListener("mousemove", setCursorPos);
      link.removeEventListener("mouseover", setCursorHover);
      link.removeEventListener("mouseleave", removeCursorHover);
      
    };
  }, []);

  return (<div id="cursor-blob"></div>);
}

