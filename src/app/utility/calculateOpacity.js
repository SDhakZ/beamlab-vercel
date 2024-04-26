const calculateOpacity = (scrollY) => {
  let adjustedScroll = 120 - scrollY;
  return Math.pow(adjustedScroll / 80, 10);
};

export default calculateOpacity;
