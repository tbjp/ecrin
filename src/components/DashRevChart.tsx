"use client";

import React from "react";

import { LineChart, TooltipProps } from "@/components/LineChart";

interface DataItem {
  date: string;
  lastYear: number;
  thisYear?: number;
}

// const data: DataItem[] = [
//   //array-start
//   {
//     date: "Jan",
//     lastYear: 2340,
//     thisYear: 2150,
//   },
//   {
//     date: "Feb",
//     lastYear: 3110,
//     thisYear: 2910,
//   },
//   {
//     date: "Mar",
//     lastYear: 4643,
//     thisYear: 4945,
//   },
//   {
//     date: "Apr",
//     lastYear: 4650,
//     thisYear: 4740,
//   },
//   {
//     date: "May",
//     lastYear: 3980,
//     thisYear: 3890,
//   },
//   {
//     date: "Jun",
//     lastYear: 4702,
//     thisYear: 4650,
//   },
//   {
//     date: "Jul",
//     lastYear: 5990,
//     thisYear: 5990,
//   },
//   {
//     date: "Aug",
//     lastYear: 5700,
//     thisYear: 5700,
//   },
//   {
//     date: "Sep",
//     lastYear: 4250,
//     thisYear: 4250,
//   },
//   {
//     date: "Oct",
//     lastYear: 4182,
//     thisYear: 4182,
//   },
//   {
//     date: "Nov",
//     lastYear: 3812,
//     thisYear: 3812,
//   },
//   {
//     date: "Dec",
//     lastYear: 4900,
//     thisYear: 4900,
//   },
//   //array-end
// ];
const generateRandomRevenue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const data: DataItem[] = [
  {
    date: "Jan",
    lastYear: generateRandomRevenue(2000000, 5000000),
    thisYear: generateRandomRevenue(2000000, 5000000),
  },
  {
    date: "Feb",
    lastYear: generateRandomRevenue(2000000, 5000000),
    thisYear: generateRandomRevenue(2000000, 5000000),
  },
  {
    date: "Mar",
    lastYear: generateRandomRevenue(3000000, 6000000),
    thisYear: generateRandomRevenue(3000000, 6000000),
  },
  {
    date: "Apr",
    lastYear: generateRandomRevenue(3000000, 6000000),
    thisYear: generateRandomRevenue(3000000, 6000000),
  },
  {
    date: "May",
    lastYear: generateRandomRevenue(2500000, 5500000),
    thisYear: generateRandomRevenue(2500000, 5500000),
  },
  {
    date: "Jun",
    lastYear: generateRandomRevenue(3000000, 6000000),
    thisYear: generateRandomRevenue(3000000, 6000000),
  },
  {
    date: "Jul",
    lastYear: generateRandomRevenue(4000000, 7000000),
    thisYear: generateRandomRevenue(4000000, 7000000),
  },
  {
    date: "Aug",
    lastYear: generateRandomRevenue(4000000, 7000000),
    thisYear: generateRandomRevenue(4000000, 7000000),
  },
  {
    date: "Sep",
    lastYear: generateRandomRevenue(3000000, 6000000),
    thisYear: generateRandomRevenue(3000000, 6000000),
  },
  {
    date: "Oct",
    lastYear: generateRandomRevenue(3000000, 6000000),
  },
  {
    date: "Nov",
    lastYear: generateRandomRevenue(2500000, 5500000),
  },
  {
    date: "Dec",
    lastYear: generateRandomRevenue(3500000, 6500000),
  },
];

function DashRevChart() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null);
  const currencyFormatter = (number: number) =>
    `¥${Intl.NumberFormat("jp").format(number)}`;

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
        <div className="text-6xl w-1/2 text-center">{month}</div>
        <div className="flex-cols w-1/2 px-6">
          <div className="text-sm text-gray-700">Last year</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-gray-50">
            {formattedValue1}
          </div>
          <div className="text-sm text-gray-700 mb-0 pt-2">This year</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-gray-50">
            {formattedValue2}
          </div>
        </div>
      </div>

      <LineChart
        data={data}
        index="date"
        categories={["lastYear", "thisYear"]}
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
      <p className="text-xl font-medium text-center text-gray-500 dark:text-gray-50 pt-3">
        Revenue
      </p>
    </div>
  );
}

export default DashRevChart;
