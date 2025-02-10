import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import PropertyPageContent from "@/app/properties/[propertyId]/PropertyPageContent";

type Props = {
  params: {
    propertyId: string;
  };
};

export default function PropertyPage({ params }: Props) {
  const property = properties.find((p) => p.id === params.propertyId);

  if (!property) {
    notFound();
  }

  return <PropertyPageContent property={property} />;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    propertyId: property.id,
  }));
}
