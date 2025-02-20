"use client";

import { useMemo } from "react";
import { Card, Title } from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/ui/Table";
import { formatJPY } from "@/lib/utils";

type BookingsTableProps = {
  bookings: string[];
  title: string;
};

export function BookingsTable({ bookings, title }: BookingsTableProps) {
  // Function to generate random dates
  const getRandomDate = (start: Date, end: Date) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  };

  // Function to calculate the number of nights between two dates
  const calculateNights = (checkIn: Date, checkOut: Date) => {
    const diff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  // Function to generate random price
  const getRandomPrice = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Generate random data once and memoize it
  const bookingData = useMemo(
    () =>
      bookings.map((booking) => {
        const checkIn = getRandomDate(new Date(), new Date(2025, 11, 31));
        const checkOut = getRandomDate(checkIn, new Date(2026, 0, 31));
        const nights = calculateNights(checkIn, checkOut);
        const pricePerNight = getRandomPrice(5000, 30000);
        const totalPrice = nights * pricePerNight;

        return {
          booking,
          checkIn,
          checkOut,
          nights,
          pricePerNight,
          totalPrice,
        };
      }),
    [bookings],
  );

  return (
    <Card className="md:col-span-2">
      <Title>{title}</Title>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Booking</TableHeaderCell>
              <TableHeaderCell>Check-in</TableHeaderCell>
              <TableHeaderCell>Check-out</TableHeaderCell>
              <TableHeaderCell>Nights</TableHeaderCell>
              <TableHeaderCell>Price per Night</TableHeaderCell>
              <TableHeaderCell>Total Price</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingData?.map((data, index) => {
              const {
                booking,
                checkIn,
                checkOut,
                nights,
                pricePerNight,
                totalPrice,
              } = data;

              return (
                <TableRow key={index}>
                  <TableCell>{booking}</TableCell>
                  <TableCell>{checkIn.toLocaleDateString("ja-JP")}</TableCell>
                  <TableCell>{checkOut.toLocaleDateString("ja-JP")}</TableCell>
                  <TableCell>{nights}</TableCell>
                  <TableCell>{formatJPY(pricePerNight)}</TableCell>
                  <TableCell>{formatJPY(totalPrice)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
