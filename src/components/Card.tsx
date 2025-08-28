"use client";

import Image from "next/image";
import DartBoardIcon from "@/assets/dart_board.svg";
import GraphIcon from "@/assets/graph.svg";
import AIIcon from "@/assets/artificial_intelligence.svg";
import ScalesIcon from "@/assets/scales.svg";
import ChronometerIcon from "@/assets/chronometer.svg";
import RocketIcon from "@/assets/rocket.svg";

const DartBoard = () => (
  <div className="svg-wrapper">
    <Image
      src={DartBoardIcon}
      alt=""
      className="svg-icon"
      width={40}
      height={40}
    />
  </div>
);
const Graph = () => (
  <div className="svg-wrapper">
    <Image src={GraphIcon} alt="" className="svg-icon" width={40} height={40} />
  </div>
);
const AI = () => (
  <div className="svg-wrapper">
    <Image src={AIIcon} alt="" className="svg-icon" width={40} height={40} />
  </div>
);
const Scales = () => (
  <div className="svg-wrapper">
    <Image
      src={ScalesIcon}
      alt=""
      className="svg-icon"
      width={40}
      height={40}
    />
  </div>
);
const Chronometer = () => (
  <div className="svg-wrapper">
    <Image
      src={ChronometerIcon}
      alt=""
      className="svg-icon"
      width={40}
      height={40}
    />
  </div>
);
const Rocket = () => (
  <div className="svg-wrapper">
    <Image
      src={RocketIcon}
      alt=""
      className="svg-icon"
      width={40}
      height={40}
    />
  </div>
);

interface Props {
  icon: string;
  children: React.ReactNode;
}

export default function Card(props: Props) {
  const renderIcon = () => {
    switch (props.icon.toLowerCase()) {
      case "dartboard":
      case "dart_board":
        return <DartBoard />;
      case "graph":
        return <Graph />;
      case "ai":
      case "artificial_intelligence":
        return <AI />;
      case "scales":
        return <Scales />;
      case "chronometer":
        return <Chronometer />;
      case "rocket":
        return <Rocket />;
      default:
        return null;
    }
  };

  return (
    <div className="card-container px-[30px] flex flex-row items-center max-w-[406px] w-full min-h-[100px] rounded-2xl border border-white/20 bg-white/5">
      {renderIcon()}
      <p className="text-[#cacaca] ml-5">{props.children}</p>
    </div>
  );
}
