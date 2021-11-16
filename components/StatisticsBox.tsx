import React from "react";

interface IProps {
  id: number;
  amount: number;
  name: string;
}

const StatisticsBox: React.FC<IProps> = ({ amount, name }: IProps) => {
  return (
    <>
      <div className="relative shadow-inner rounded-2xl">
        <span className="absolute -inset-1 bg-gravityYellow bg-opacity-10 blur-sm shadow-inner"></span>

        <div className="relative bg-gravityDarkLight rounded-2xl border border-gravityYellow p-6">
          <p className="text-2xl font-bold text-white">
            <span className="-mr-1">${amount}</span> {amount >= 1 ? "m" : ""}
          </p>
          <h5 className="font-bold text-gravityYellow"> {name} </h5>
        </div>
      </div>
    </>
  );
};

export default StatisticsBox;
