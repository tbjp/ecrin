"use client";

import React from "react";

import { LineChart, TooltipProps } from "@/components/LineChart";

interface DataItem {
  date: string;
  lastYear: number;
  thisYear: number;
}

const data: DataItem[] = [
  //array-start
  {
    date: "Jan",
    lastYear: 2340,
    thisYear: 2150,
  },
  {
    date: "Feb",
    lastYear: 3110,
    thisYear: 2910,
  },
  {
    date: "Mar",
    lastYear: 4643,
    thisYear: 4945,
  },
  {
    date: "Apr",
    lastYear: 4650,
    thisYear: 4740,
  },
  {
    date: "May",
    lastYear: 3980,
    thisYear: 3890,
  },
  {
    date: "Jun",
    lastYear: 4702,
    thisYear: 4650,
  },
  {
    date: "Jul",
    lastYear: 5990,
    thisYear: 5990,
  },
  {
    date: "Aug",
    lastYear: 5700,
    thisYear: 5700,
  },
  {
    date: "Sep",
    lastYear: 4250,
    thisYear: 4250,
  },
  {
    date: "Oct",
    lastYear: 4182,
    thisYear: 4182,
  },
  {
    date: "Nov",
    lastYear: 3812,
    thisYear: 3812,
  },
  {
    date: "Dec",
    lastYear: 4900,
    thisYear: 4900,
  },
  //array-end
];

function DashRevChart() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null);
  const currencyFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(number)}`;

  const payload = datas?.payload?.[0];
  const value = payload?.value;

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(data[data.length - 1].lastYear);

  return (
    <div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Revenue by month
      </p>
      <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {formattedValue}
      </p>

      <LineChart
        data={data}
        index="date"
        categories={["revenue"]}
        showLegend={false}
        showYAxis={false}
        startEndOnly={true}
        className="-mb-2 mt-8 h-48"
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
    </div>
  );
}

export default DashRevChart;
