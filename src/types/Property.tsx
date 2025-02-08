export interface Property {
  id: string;
  name: string;
  image: string;
  location: string;
  rooms: number;
  staff: number;
  bookings: number;
  hasIssues: boolean;
  issueCount?: number;
}
