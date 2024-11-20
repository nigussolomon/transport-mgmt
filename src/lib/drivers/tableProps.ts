import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "firstName",
    label: "First Name",
  },
  {
    accessor: "lastName",
    label: "Last Name",
  },
  {
    accessor: "email",
    label: "Email",
  },
  {
    accessor: "phone",
    label: "Phone Number",
  },
  {
    accessor: "status",
    label: "Status",
  },
];

export const rows: RowData[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "X4e2l@example.com",
    phone: "123-456-7890",
    status: "Active",
    reviews: { positive: 123, negative: 45 },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "5FtZI@example.com",
    phone: "123-456-7890",
    status: "Inactive",
    reviews: { positive: 456, negative: 78 },
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "X4e2l@example.com",
    phone: "123-456-7890",
    status: "Active",
    reviews: { positive: 123, negative: 45 },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "5FtZI@example.com",
    phone: "123-456-7890",
    status: "Inactive",
    reviews: { positive: 456, negative: 78 },
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "X4e2l@example.com",
    phone: "123-456-7890",
    status: "Active",
    reviews: { positive: 123, negative: 45 },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "5FtZI@example.com",
    phone: "123-456-7890",
    status: "Inactive",
    reviews: { positive: 456, negative: 78 },
  },
];
