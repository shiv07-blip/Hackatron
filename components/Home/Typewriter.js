import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [title, setTitle] = useState("DESIGN. DEVELOP. CODE.");
  let idx = 0;
  let direction = 1;
  let animationDelay = 100; // milliseconds
  let pauseDelay = 2000; // milliseconds
  function writeText() {
    if (direction === 1) {
      setTitle(title.slice(0, idx));
      idx++;
      if (idx > title.length) {
        direction = -1;
        idx = title.length;
        setTimeout(writeText, pauseDelay);
        return;
      }
    } else if (direction === -1) {
      setTitle(title.slice(0, idx));
      idx--;
      if (idx < 0) {
        direction = 1;
        idx = 0;
        setTimeout(writeText, pauseDelay);
        return;
      }
    }

    setTimeout(writeText, animationDelay);
  }
  useEffect(() => writeText(), []);

  return (
    <>
      <p className="title" id="title">
        {title}
      </p>
      <p style={{ marginTop: "0" }}>27 - 28th MARCH, 2025</p>
      <p className="venue-text">
          BIRSA INSTITUTE OF TECHNOLOGY, SINDRI-DHANBAD 
          <br />
          JHARKHAND, India
      </p>
    </>
  );
};

export default Typewriter;
