import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  orderReference: string;
  orderItem: string;
  vehicle: string;
  totalQuantity: number;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "orderReference",
    label: "Order Reference",
  },
  {
    accessor: "orderItem",
    label: "Order Item",
  },
  {
    accessor: "vehicle",
    label: "Vehicle",
  },
  {
    accessor: "totalQuantity",
    label: "Total Quantity",
  },
  {
    accessor: "status",
    label: "Status",
  },
];

export const rows: RowData[] = [
  {
    orderReference: "SO123",
    orderItem: "Order Item 1",
    totalQuantity: 10,
    vehicle: "Vehicle 1",
    status: "Open",
    reviews: { positive: 123, negative: 45 },
  },
  {
    orderReference: "SO456",
    orderItem: "Order Item 2",
    totalQuantity: 5,
    vehicle: "Vehicle 2",
    status: "Closed",
    reviews: { positive: 456, negative: 78 },
  },
  {
    orderReference: "SO789",
    orderItem: "Order Item 3",
    totalQuantity: 15,
    vehicle: "Vehicle 3",
    status: "Open",
    reviews: { positive: 789, negative: 90 },
  },
];
