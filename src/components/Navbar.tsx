"use client";

import { useState, useEffect } from "react";
import NavLink from "./navLink";
import Form from "./Form";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100 && isVisible) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <div
      className={`flex flex-row justify-between items-center fixed top-[30px] left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-md py-4 px-5 rounded-full border-y border-white max-w-[1000px] w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[110px]"
      }`}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 43 43"
        className="cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
      <div className="flex flex-row items-center gap-7">
        <NavLink id="how-it-work">How It Works</NavLink>
        <NavLink>Case Studies</NavLink>
        <NavLink>Pricing</NavLink>
      </div>
      <Form>
        <Button className="w-[165px] h-10 leading-[140%] hover:bg-[#8D5CFF]">
          Join Early Access
        </Button>
      </Form>
    </div>
  );
}
