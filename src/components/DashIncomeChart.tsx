"use client";

import React from "react";

import { LineChart, TooltipProps } from "@/components/LineChart";
import { randomNumber } from "@/lib/randomNumber";
import { formatJPY } from "@/lib/utils";

interface DataItem {
  date: string;
  lastYear: number;
  thisYear?: number;
}

const data: DataItem[] = [
  {
    date: "Jan",
    lastYear: randomNumber(2000000, 5000000),
    thisYear: randomNumber(2000000, 5000000),
  },
  {
    date: "Feb",
    lastYear: randomNumber(2000000, 5000000),
    thisYear: randomNumber(2000000, 5000000),
  },
  {
    date: "Mar",
    lastYear: randomNumber(3000000, 6000000),
    thisYear: randomNumber(3000000, 6000000),
  },
  {
    date: "Apr",
    lastYear: randomNumber(3000000, 6000000),
    thisYear: randomNumber(3000000, 6000000),
  },
  {
    date: "May",
    lastYear: randomNumber(2500000, 5500000),
    thisYear: randomNumber(2500000, 5500000),
  },
  {
    date: "Jun",
    lastYear: randomNumber(3000000, 6000000),
    thisYear: randomNumber(3000000, 6000000),
  },
  {
    date: "Jul",
    lastYear: randomNumber(4000000, 7000000),
    thisYear: randomNumber(4000000, 7000000),
  },
  {
    date: "Aug",
    lastYear: randomNumber(4000000, 7000000),
    thisYear: randomNumber(4000000, 7000000),
  },
  {
    date: "Sep",
    lastYear: randomNumber(3000000, 6000000),
    thisYear: randomNumber(3000000, 6000000),
  },
  {
    date: "Oct",
    lastYear: randomNumber(3000000, 6000000),
  },
  {
    date: "Nov",
    lastYear: randomNumber(2500000, 5500000),
  },
  {
    date: "Dec",
    lastYear: randomNumber(3500000, 6500000),
  },
];

function DashIncomeChart() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null);
  const currencyFormatter = (number: number) => `${formatJPY(number)}`;

  const payload = datas?.payload?.[0];
  const lastYearValue = payload?.payload?.lastYear;
  const thisYearValue = payload?.payload?.thisYear;

  const formattedValue1 = payload
    ? currencyFormatter(lastYearValue ?? 0)
    : currencyFormatter(data[0].lastYear);

  const month = payload?.payload?.date ?? data[0].date;

  // Calc thisYear formatted value
  let formattedValue2;
  if (payload) {
    if (thisYearValue === undefined) {
      formattedValue2 = currencyFormatter(0);
    } else {
      formattedValue2 = currencyFormatter(thisYearValue);
    }
  } else {
    formattedValue2 = currencyFormatter(data[0].thisYear);
  }

  return (
    <div>
      <div className="flex justify-start items-center">
        <div className="text-6xl w-1/2 text-center text-ecrinSlate">
          {month}
        </div>
        <div className="flex-cols w-1/2 px-6">
          <div className="text-sm text-ecrinNavy font-medium">Last year</div>
          <div className="text-xl font-semibold text-ecrinNavy dark:text-gray-50">
            {formattedValue1}
          </div>
          <div className="text-sm text-ecrinMossDark mb-0 pt-2 font-medium">
            This year
          </div>
          <div className="text-xl font-semibold text-ecrinMossDark dark:text-gray-50">
            {formattedValue2}
          </div>
        </div>
      </div>

      <LineChart
        data={data}
        index="date"
        categories={["lastYear", "thisYear"]}
        colors={["ecrinNavy", "ecrinMoss"]}
        showLegend={false}
        showYAxis={false}
        startEndOnly={false}
        className="-mb-2 mt-8 h-48"
        showTooltip={false}
        tooltipCallback={(props) => {
          if (props.active) {
            setDatas((prev) => {
              if (prev?.label === props.label) return prev;
              return props;
            });
          } else {
            setDatas(null);
          }
          return null;
        }}
      />
      <h2 className="text-xl font-medium text-center text-gray-500 dark:text-gray-50 h3t-3 pt-3">
        Net Income
      </h2>
    </div>
  );
}

export default DashIncomeChart;
