import { Property } from "@/types/Property";
import Image from "next/image";
import { TbMapPin, TbCalendarCheck, TbAlertCircle } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import Link from "next/link";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="relative group overflow-hidden rounded-lg h-64">
        <div className="relative w-full h-full">
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1024px) 33vw,
                   (max-width: 1280px) 25vw,
                   (max-width: 1536px) 16vw,
                   8vw"
            className="object-cover"
          />
        </div>

        {property.hasIssues && (
          <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full z-10" />
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10">
          <h2 className="text-white font-semibold">{property.name}</h2>
        </div>

        <div className="absolute inset-0 pt-1 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="p-4 text-white space-y-2">
            {property.hasIssues && (
              <div className="flex items-center gap-2 text-red-400">
                <TbAlertCircle className="w-5 h-5" />
                <span>{property.issueCount} issues</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <TbMapPin className="w-5 h-5" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiBuildingHouse className="w-5 h-5" />
              <span>{property.rooms} rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <GoPeople className="w-5 h-5" />
              <span>{property.staff} staff</span>
            </div>
            <div className="flex items-center gap-2">
              <TbCalendarCheck className="w-5 h-5" />
              <span>{property.bookings} bookings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
