import Announcements from "@/components/Announcements";
import OccupancyRadial from "@/components/OccupancyRadial";
import SmallCalendar from "@/components/SmallCalendar";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <StatCard type="properties" />
          <StatCard type="staff" />
          <StatCard type="active bookings" />
          <StatCard type="occupancy rate" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* OCCUPANCY CHART */}
          <div className="w-full lg:w-1/3 h-[450px] bg-black">
            <OccupancyRadial />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px] bg-black">
            {/* <AttendanceChart /> */}
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px] bg-black">
          {/* <FinanceChart /> */}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8 bg-black">
        <Announcements />
        <SmallCalendar />
      </div>
    </div>
  );
}
