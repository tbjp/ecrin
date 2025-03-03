import { TbDots } from "react-icons/tb";
import { randomNumber } from "@/lib/randomNumber";

type StatType = "properties" | "bookings" | "staff" | "issues";
type MinMaxRange = { min: number; max: number };
type TypeMinMax = Record<StatType, MinMaxRange>;

const StatCard = ({ type }: { type: StatType }) => {
  const typeMinMax: TypeMinMax = {
    properties: { min: 50, max: 70 },
    bookings: { min: 300, max: 500 },
    staff: { min: 100, max: 200 },
    issues: { min: 10, max: 80 },
  };

  const getRandomNumber = () => {
    const range = typeMinMax[type];
    return randomNumber(range.min, range.max);
  };

  return (
    <div className="rounded-md odd:bg-ecrinMoss even:bg-ecrinSlate p-4 flex-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-black bg-opacity-20	 px-2 py-1 rounded-full text-white">
          2025/26
        </span>
        <TbDots size="20px" />
      </div>
      <h1 className="text-2xl font-semibold my-4">{getRandomNumber()}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-700">{type}</h2>
    </div>
  );
};

export default StatCard;
