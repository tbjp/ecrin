"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/Table";
import { Card, Title } from "@/components/ui/Card";

interface Property {
  property: string;
  Bookings: number;
}

interface RevenueTableProps {
  properties: Property[];
}

export default function RevenueTable({ properties }: RevenueTableProps) {
  return (
    <Card>
      <Title>Revenue & Bookings</Title>
      <Table>
        <TableRow>
          <TableHeaderCell>Property</TableHeaderCell>
          <TableHeaderCell>Bookings</TableHeaderCell>
        </TableRow>
        <TableBody>
          {properties.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.property}</TableCell>
              <TableCell>{item.Bookings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
