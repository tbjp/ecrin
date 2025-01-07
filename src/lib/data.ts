// Example of a property with images, financial, and occupancy data
export const properties = [
  {
    id: 1,
    name: "Mountain View Retreat",
    location: "Darjeeling, India",
    images: [
      "/images/property1_1.jpg",
      "/images/property1_2.jpg",
      "/images/property1_3.jpg",
    ],
    pricePerNight: 15000, // in JPY
    occupancyRate: 80, // Occupancy rate in percentage
    bookings: [
      {
        guestName: "John Doe",
        checkIn: "2025-01-01",
        checkOut: "2025-01-07",
        totalPrice: 1050,
      },
      {
        guestName: "Jane Smith",
        checkIn: "2025-01-10",
        checkOut: "2025-01-15",
        totalPrice: 750,
      },
    ],
    ratings: {
      average: 4.7,
      reviews: 120,
    },
  },
  {
    id: 2,
    name: "Beachfront Oasis",
    location: "Goa, India",
    images: ["/images/property2_1.jpg", "/images/property2_2.jpg"],
    pricePerNight: 200, // in USD
    occupancyRate: 90, // Occupancy rate in percentage
    bookings: [
      {
        guestName: "Alice Brown",
        checkIn: "2025-01-05",
        checkOut: "2025-01-12",
        totalPrice: 1400,
      },
      {
        guestName: "Bob White",
        checkIn: "2025-01-18",
        checkOut: "2025-01-22",
        totalPrice: 800,
      },
    ],
    ratings: {
      average: 4.9,
      reviews: 150,
    },
  },
];

// Example of some mock financial data
export const financials = {
  totalRevenue: 4000000, // Total revenue for the month across properties
  expenses: {
    cleaning: 200000,
    maintenance: 100000,
    utilities: 80000,
  },
  profit: 32000, // Profit after expenses
};

// Example occupancy rate data for charts
export const occupancyData = [
  { month: "Jan", occupancyRate: 80 },
  { month: "Feb", occupancyRate: 85 },
  { month: "Mar", occupancyRate: 75 },
  { month: "Apr", occupancyRate: 90 },
  { month: "May", occupancyRate: 88 },
  { month: "Jun", occupancyRate: 92 },
  { month: "Jul", occupancyRate: 95 },
  { month: "Aug", occupancyRate: 88 },
  { month: "Sep", occupancyRate: 85 },
  { month: "Oct", occupancyRate: 90 },
  { month: "Nov", occupancyRate: 92 },
  { month: "Dec", occupancyRate: 94 },
];
