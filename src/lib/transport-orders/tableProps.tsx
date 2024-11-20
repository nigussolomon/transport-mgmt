import { Column, Reviews } from "@/components/ui/table/table";
import { dateFormatter } from "@/lib/formatters";
import Details from "./details";

interface RowData {
  reference: string;
  customer: string;
  orderDate: string;
  expectedDate: string;
  orderManager: string;
  status: string;
  action?: void;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "reference",
    label: "Order Reference",
  },
  {
    accessor: "customer",
    label: "Customer",
  },
  {
    accessor: "orderDate",
    label: "Order Date",
    render: (value) => dateFormatter(value.orderDate),
  },
  {
    accessor: "expectedDate",
    label: "Expected Date",
    render: (value) => dateFormatter(value.expectedDate),
  },
  {
    accessor: "orderManager",
    label: "Order Manager",
  },
  {
    accessor: "status",
    label: "Status",
  },
  {
    accessor: "action",
    label: "",
    render: (value) => <Details />,
  },
];

export const rows: RowData[] = [
  {
    reference: "SO123",
    customer: "John Doe",
    orderDate: dateFormatter(new Date()),
    expectedDate: dateFormatter(new Date()),
    orderManager: "John Doe",
    status: "Open",
    reviews: { positive: 123, negative: 45 },
  },
];
