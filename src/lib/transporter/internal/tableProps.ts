import { Column, Reviews } from "@/components/ui/table/table";
import { currencyFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  manager: string;
  location: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Transporter Code",
    accessor: "code",
  },
  { label: "Transporter Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  { label: "Manager", accessor: "manager" },
  { label: "Location", accessor: "location" },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    manager: "Jane Smith",
    location: "Los Angeles",
    reviews: { positive: 456, negative: 78 },
  },
];
