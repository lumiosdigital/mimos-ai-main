"use client";

interface Props {
  step: number;
  title: string;
  children: React.ReactNode;
}

export default function Step(props: Props) {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="rounded-full w-[30px] h-[30px] bg-black items-center justify-center flex">
          <p className="text-white font-extrabold md:text-lg text-sm">
            {props.step}
          </p>
        </div>
        <h3 className="ml-3 text-lg md:text-2xl font-bold">{props.title}</h3>
      </div>
      <div className="mt-4">
        <p className="text-[#626262] text-sm md:text-base">{props.children}</p>
      </div>
    </div>
  );
}
