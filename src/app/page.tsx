import Announcements from "@/components/Announcements";
import DashRevChart from "@/components/DashRevChart";
import OccupancyRadial from "@/components/OccupancyRadial";
import SmallCalendar from "@/components/SmallCalendar";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 flex-wrap justify-between">
          <StatCard type="properties" />
          <StatCard type="staff" />
          <StatCard type="bookings" />
          <StatCard type="issues" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* OCCUPANCY CHART */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl p-4">
            <OccupancyRadial />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl p-4">
            <DashRevChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px] bg-white rounded-2xl p-4">
          {/* <FinanceChart /> */}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <Announcements />
        <SmallCalendar />
      </div>
    </div>
  );
}
