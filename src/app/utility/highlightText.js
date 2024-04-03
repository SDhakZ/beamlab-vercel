import React from "react";

export const highlightText = (text, highlightColor) => {
  // Adjusted regex to split on *hlt for start and hlt* for end
  const parts = text.split(/(\*hlt|hlt\*)/g);
  let highlight = false;

  const filteredParts = parts.filter((part) => part !== "");

  return filteredParts
    .map((part, index) => {
      if (part === "*hlt") {
        highlight = true;
        return null;
      } else if (part === "hlt*") {
        highlight = false;
        return null;
      }

      if (highlight) {
        // Render the part within a span for highlighting
        return (
          <span
            key={index}
            className={`text-black-shade-300 ${
              highlightColor ? highlightColor : "bg-[rgba(251,226,1,0.92)]"
            }`}
          >
            {part}
          </span>
        );
      } else {
        // Render the part without highlighting
        return part;
      }
    })
    .filter(Boolean); // Filter out null to clean up the resulting array
};
