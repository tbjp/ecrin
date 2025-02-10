import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  const sortedProperties = [...properties].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
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
