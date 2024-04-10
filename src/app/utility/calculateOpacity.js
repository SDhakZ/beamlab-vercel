const calculateOpacity = (scrollY) => {
  let adjustedScroll = 120 - scrollY;
  return Math.pow(adjustedScroll / 90, 10);
};

export default calculateOpacity;
