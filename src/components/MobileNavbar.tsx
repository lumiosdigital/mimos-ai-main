"use client";

import { useEffect, useState } from "react";
import { HamburgerIcon } from "./MenuIcon";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Form from "./Form";

interface MobileNavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function MobileNavbar({ onNavigate }: MobileNavbarProps) {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setIsVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 84 && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible, open]);

  return (
    <>
      <div
        className={`flex flex-row justify-between items-center fixed top-[20px] left-1/2 -translate-x-1/2 max-w-[90%] w-full rounded-full z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-[84px]"
        }`}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 43 43"
          className="cursor-pointer group"
          onClick={() => {
            if (open) setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <g clipPath="url(#clip0_78_2056)">
            <path
              d="M21.4979 0C27.769 0 32.9201 2.0177 36.9512 6.04881C40.9823 10.0799 43 15.231 43 21.4979C43 27.7647 40.9823 32.9201 36.9512 36.9512C32.9201 40.9823 27.769 43 21.4979 43C15.2268 43 10.0757 40.9823 6.04454 36.9512C2.0177 32.9201 0 27.7732 0 21.4979C0 15.2225 2.0177 10.0799 6.04454 6.04881C10.0757 2.0177 15.2268 0 21.4979 0Z"
              className="fill-[#000] group-hover:fill-[#8D5CFF] transition-colors"
            />
            <path
              d="M16.7186 18.0763C15.8402 18.0763 15.1383 18.3364 14.6049 18.8566C14.0755 19.3768 13.8107 20.061 13.8107 20.9174V29.0685H9.83203V20.8854C9.83203 19.909 10.0045 19.0046 10.3534 18.1683C10.6984 17.332 11.1797 16.6157 11.7933 16.0155C12.407 15.4153 13.1289 14.9471 13.9672 14.611C14.8054 14.2748 15.7199 14.1068 16.7226 14.1068C17.7253 14.1068 18.6077 14.2708 19.4459 14.595C20.2842 14.9191 20.9981 15.3793 21.5877 15.9675C22.2013 15.3793 22.9233 14.9191 23.7615 14.595C24.5998 14.2708 25.5062 14.1068 26.4849 14.1068C27.4635 14.1068 28.402 14.2748 29.2403 14.611C30.0785 14.9471 30.8005 15.4153 31.4141 16.0155C32.0278 16.6157 32.501 17.332 32.838 18.1683C33.1749 19.0046 33.3433 19.909 33.3433 20.8854V29.0685H29.3646V20.9174C29.3646 20.061 29.1039 19.3768 28.5825 18.8566C28.0611 18.3364 27.3632 18.0763 26.4849 18.0763C25.6065 18.0763 24.9046 18.3364 24.3752 18.8566C23.8458 19.3768 23.581 20.061 23.581 20.9174V29.0685H19.6023V20.9174C19.6023 20.061 19.3416 19.3768 18.8202 18.8566C18.2988 18.3364 17.6009 18.0763 16.7226 18.0763H16.7186Z"
              className="fill-white"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_2056">
              <rect width="43" height="43" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <button
          onClick={handleToggleMenu}
          className="bg-white/0 backdrop-blur-md p-2 rounded-full"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
      <MobileMenu
        isOpen={open}
        onClose={handleCloseMenu}
        onNavigate={onNavigate}
      />
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  const handleMenuClick = (sectionId: string) => {
    onClose();
    onNavigate(sectionId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed w-full h-full bg-[#f6f6f6] z-40 flex flex-col items-center"
          >
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className="w-full flex justify-center"
              >
                <div
                  className="font-semibold cursor-pointer transition-all duration-200 hover:text-[#8D5CFF]"
                  onClick={() => handleMenuClick("how-it-work")}
                >
                  How It Works
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full flex justify-center"
              >
                <div
                  className="font-semibold cursor-pointer transition-all duration-200 hover:text-[#8D5CFF]"
                  id="case-studies"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Case Studies
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full flex justify-center"
              >
                <div
                  className="font-semibold cursor-pointer transition-all duration-200 hover:text-[#8D5CFF]"
                  id="pricing"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Pricing
                </div>
              </motion.div>
            </div>
            <div className="p-9 space-y-7 flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-xs mx-auto"
              >
                <Form>
                  <Button className="h-11 w-full">Join Early Access</Button>
                </Form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center space-x-6"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer group"
                >
                  <path
                    d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
                    className="fill-black group-hover:fill-[#8D5CFF] transition-colors"
                  />
                </svg>
                <Link
                  href={"https://www.linkedin.com/company/mimos-aeo/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer group"
                  >
                    <g clipPath="url(#clip0_78_2166)">
                      <path
                        d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                        className="fill-black group-hover:fill-[#8D5CFF] transition-colors"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_2166">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer group"
                >
                  <g clipPath="url(#clip0_78_2167)">
                    <path
                      d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12H24Z"
                      className="fill-black group-hover:fill-[#8D5CFF] transition-colors"
                    />
                    <path
                      d="M16.7002 15.6672L17.3737 12H13.454V10.703C13.454 8.76526 14.2143 8.01982 16.1818 8.01982C16.7929 8.01982 17.2849 8.0347 17.5681 8.06446V4.74046C17.0314 4.59118 15.7196 4.44238 14.9593 4.44238C10.9493 4.44238 9.10087 6.3355 9.10087 10.4198V12H6.62646V15.6672H9.10087V23.6467C10.0292 23.8771 11.0002 24 11.9996 24C12.4916 24 12.9769 23.9697 13.4535 23.9121V15.6672H16.6997H16.7002Z"
                      className="fill-white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_78_2167">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
