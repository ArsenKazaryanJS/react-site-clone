import { useState, useEffect } from "react";

const useScrollShadow = (scrollLimit) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY >= scrollLimit );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLimit ]); 

  return shadow;
};

export default useScrollShadow;