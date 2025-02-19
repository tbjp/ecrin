import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import PropertyPageContent from "@/app/properties/[propertyId]/PropertyPageContent";

type Props = {
  params: Promise<{
    propertyId: string;
  }>;
};

export default async function PropertyPage({ params }: Props) {
  const { propertyId } = await params;
  const property = properties.find((p) => p.id === propertyId);

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
