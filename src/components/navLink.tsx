"use client";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function NavLink(props: Props) {
  const handleClick = () => {
    if (props.id) {
      const element = document.getElementById(props.id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <h1
      className="font-semibold text-sm cursor-pointer transition-all duration-200 hover:text-[#8D5CFF]"
      onClick={handleClick}
    >
      {props.children}
    </h1>
  );
}
