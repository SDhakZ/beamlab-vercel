import React from "react";
import RevolvingCircles from "./(Components)/RevolvingCircles";

const Technology = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-background-black">
      <RevolvingCircles />
    </div>
  );
});
export default Technology;
