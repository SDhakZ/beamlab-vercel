const calculateGradient = (scrollY) => {
  const scrollProgress = Math.min(100, Math.max(0, scrollY));
  // As the user scrolls down, the starting point of the orange color moves upwards
  const orangeStart = Math.max(0, 200 - 4 * scrollProgress); // Start the orange gradient earlier
  const orangeEnd = 90; // End of the orange color
  return `linear-gradient(to bottom, rgba(170, 10, 100, 1) 0%, rgba(0, 0, 0, 1) ${orangeStart}%, rgba(254, 122, 0) ${orangeEnd}%)`;
};

export default calculateGradient;
