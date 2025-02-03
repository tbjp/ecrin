// app/financials/TopPropertiesTable.tsx
"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@/components/ui/Table";
import { Card, Title } from "@/components/ui/Card";

const properties = [
  { property: "La Baguette Magique", revenue: 45000 },
  { property: "La Forêt", revenue: 52000 },
  { property: "Villa Sakura", revenue: 68000 },
  { property: "Maison du Pavillon", revenue: 75000 },
];

export default function TopPropertiesTable() {
  return (
    <Card className="p-4">
      <Title>Top Properties by Revenue</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Property</TableHeaderCell>
            <TableHeaderCell>Revenue ($)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.property}>
              <TableCell>{property.property}</TableCell>
              <TableCell>{property.revenue.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
