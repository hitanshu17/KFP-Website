const getImagePrefix = () => {
  return process.env.NODE_ENV === "production" ? "/KFP/" : "";
};

export { getImagePrefix };
 
