import Announcements from "@/components/Announcements";
import { DashBarChart } from "@/components/DashBarChart";
import DashIncomeChart from "@/components/DashIncomeChart";
import OccupancyRadial from "@/components/OccupancyRadial";
import SmallCalendar from "@/components/SmallCalendar";
import StatCard from "@/components/StatCard";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  // Get the 4 most recent properties
  const recentProperties = [...properties]
    .sort((a, b) => b.addedDate.getTime() - a.addedDate.getTime())
    .slice(0, 4);

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* USER CARDS */}
        <div className="flex gap-4 flex-wrap justify-between">
          <StatCard type="properties" />
          <StatCard type="staff" />
          <StatCard type="bookings" />
          <StatCard type="issues" />
        </div>

        {/* RECENT PROPERTIES */}
        <div className="w-full bg-white rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <h2 className="text-xl font-medium text-gray-500 dark:text-gray-50 mt-4 text-center">
            Latest Properties
          </h2>
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* OCCUPANCY CHART */}
          <div className="w-full lg:w-1/3 bg-white rounded-md p-4">
            <OccupancyRadial />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 bg-white rounded-md p-4">
            <DashIncomeChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full bg-white rounded-md p-4">
          <DashBarChart />
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
