import React, { useState } from "react";

const StringArea = ({ text, max }) => {
  const [setFull, setShowFull] = useState(false);

  let shortText = text;

  // yazdıyı kesecek mi yoksa tamamnını mı gösterecek
  if (text.length > max && !setFull) {
    shortText = text.slice(0, max) + "...Daha fazla";
  }
  return (
    <p onClick={() => setShowFull(!setFull)}>
      {shortText.split("\n").map((line,i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
