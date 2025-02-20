"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/Property";
import { StaffSection } from "@/app/properties/[propertyId]/StaffSection";
import { IssuesSection } from "@/app/properties/[propertyId]/IssuesSection";
import { BookingsTable } from "@/app/properties/[propertyId]/BookingsTable";

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

const preventBodyShift = (isOpen: boolean) => {
  const scrollbarWidth = getScrollbarWidth();
  if (isOpen) {
    // Store current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    // Restore scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.paddingRight = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
};

export default function PropertyPageContent({
  property,
}: {
  property: Property;
}) {
  // Transform initial issues (which are strings) into objects with { name, date }
  const initialIssues = (property.issues || []).map((issue) => ({
    name: issue,
    date: "",
  }));
  // const [issues, setIssues] = useState(initialIssues);
  const [isModalOpen] = useState(false);
  // const [newIssue, setNewIssue] = useState("");
  // const [newIssueDate, setNewIssueDate] = useState("");

  const [isStaffModalOpen] = useState(false);
  // const [newStaffMember, setNewStaffMember] = useState("");
  // const [staffMembers, setStaffMembers] = useState(property.staffMembers || []);

  useEffect(() => {
    preventBodyShift(isModalOpen || isStaffModalOpen);
    return () => preventBodyShift(false);
  }, [isModalOpen, isStaffModalOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative h-64 md:h-40 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover brightness-[0.75]"
        />
        {/* Go Back Button */}
        <Link href="/properties">
          <button className="absolute top-4 right-4 z-10 bg-ecrinNavy hover:bg-ecrinNavy/80 font-bold text-white py-1 px-3 rounded shadow">
            Go Back
          </button>
        </Link>
        <div className="absolute inset-0 flex items-end justify-start p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {property.name}
          </h1>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <IssuesSection initialIssues={initialIssues} />
          <StaffSection initialStaff={property.staffMembers || []} />
          <BookingsTable
            bookings={property.activeBookings || []}
            title="Active Bookings"
          />
          <BookingsTable
            bookings={property.futureBookings || []}
            title="Future Bookings"
          />
        </div>
      </div>
    </div>
  );
}
