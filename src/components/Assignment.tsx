import { FC } from "react";

export type AssignmentProps = {
  company: string;
  role: string;
  year: string;
  description: string;
};

export const Assignment: FC<AssignmentProps> = ({
  company,
  role,
  year,
  description,
}) => {
  return (
    <div className="flex my-4 gap-4">
      <div className="flex mt-1.5">
        <div className="relative bg-zinc-500 w-16 h-8 flex items-center justify-center year-box font-bold ">
          {year}
        </div>
        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[16px] border-b-[16px] border-b-transparent border-l-zinc-500"></div>
      </div>
      <div className="flex mt-2 flex-col items-center justify-between">
        {/* <div className="my-3 h-6 w-6 rounded-full ring-4 ring-action "></div> */}
        <div className=" h-6 w-6 rounded-full bg-action  "></div>
        <div className="h-5/6 w-0.5 bg-white"></div>
      </div>
      <div>
        <h1 className="text-4xl  font-medium">{company}</h1>
        <div className=" mt-2">
          <h2 className="text-2xl mb-2 ">{role}</h2>
          <div className="max-w-screen-md">{description}</div>
        </div>
      </div>
    </div>
  );
};