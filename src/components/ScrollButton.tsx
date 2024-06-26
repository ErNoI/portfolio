import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const threshold = 200;
    const currentScroll = document.documentElement.scrollTop;
    setIsVisible(currentScroll > threshold);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-6 right-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-secondary shadow-lg transition-all duration-300 max-lg:bg-action max-md:bottom-3 max-md:right-3 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <FaArrowUp color={isMobile ? "#3d3e42" : "#ffd06e"} size={30} />
    </div>
  );
};
