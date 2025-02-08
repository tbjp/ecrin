// Page showing all the properties at Ecrin.
// The page is a grid of cards, each card shows an image, with the name in white at the bottom.
// Undernearth the name there is a slight shadow to make the text more readable.
// If there are any issues with the property, a red dot will appear in the top right corner of the card.
// Hovering over the card will show how many rooms, staff and bookings are associated with the property.
// Hovering also shows the location.
// The cards are sorted by the property name.
// Use images/property1.jpg as a placeholder image.
// Make the grid responsive with 1, 2, 3, 4, 6, 12 columns.

import { Property } from "@/types/Property";
import { PropertyCard } from "@/components/PropertyCard";
import { Text } from "@/components/ui/Card";

const properties: Property[] = [
  {
    id: "1",
    name: "Alpine Lodge",
    image: "/images/property1.jpg",
    location: "Chamonix",
    rooms: 10,
    staff: 5,
    bookings: 4,
    hasIssues: true,
    issueCount: 3,
  },
  {
    id: "2",
    name: "Auberge Mystique",
    image: "/images/property1.jpg",
    location: "Val d'Isère",
    rooms: 15,
    staff: 8,
    bookings: 12,
    hasIssues: false,
  },
  {
    id: "3",
    name: "Château Lumière",
    image: "/images/property1.jpg",
    location: "Méribel",
    rooms: 20,
    staff: 12,
    bookings: 8,
    hasIssues: true,
    issueCount: 2,
  },
  {
    id: "4",
    name: "La Baguette Magique",
    image: "/images/property1.jpg",
    location: "Verbier",
    rooms: 8,
    staff: 4,
    bookings: 6,
    hasIssues: false,
  },
  {
    id: "5",
    name: "La Forêt",
    image: "/images/property1.jpg",
    location: "Zermatt",
    rooms: 12,
    staff: 6,
    bookings: 9,
    hasIssues: false,
  },
  {
    id: "6",
    name: "Maison du Pavillon",
    image: "/images/property1.jpg",
    location: "Tignes",
    rooms: 14,
    staff: 7,
    bookings: 5,
    hasIssues: true,
    issueCount: 1,
  },
  {
    id: "7",
    name: "Villa Sakura",
    image: "/images/property1.jpg",
    location: "Courchevel",
    rooms: 18,
    staff: 10,
    bookings: 15,
    hasIssues: false,
  },
];

export default function PropertiesPage() {
  const sortedProperties = [...properties].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-ecrinNavy">Properties</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
        {sortedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
