import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  vehicleId: string;
  vehicleModel: string;
  vehicleMake: string;
  vehicleYear: string;
  vehicleColor: string;
  vehicleMaxCapacity: string;
  driver: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "vehicleId",
    label: "Vehicle ID",
  },
  {
    accessor: "vehicleModel",
    label: "Vehicle Model",
  },
  {
    accessor: "vehicleMake",
    label: "Vehicle Make",
  },
  {
    accessor: "vehicleYear",
    label: "Vehicle Year",
  },
  {
    accessor: "vehicleColor",
    label: "Vehicle Color",
  },
  {
    accessor: "vehicleMaxCapacity",
    label: "Vehicle Max Capacity (KG)",
  },
  {
    accessor: "driver",
    label: "Driver",
  },
];

export const rows: RowData[] = [
  {
    vehicleId: "12345",
    vehicleModel: "Toyota",
    vehicleMake: "Camry",
    vehicleYear: "2022",
    vehicleColor: "Red",
    vehicleMaxCapacity: "400 (KG)",
    driver: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    vehicleId: "67890",
    vehicleModel: "Honda",
    vehicleMake: "Civic",
    vehicleYear: "2021",
    vehicleColor: "Blue",
    vehicleMaxCapacity: "400 (KG)",
    driver: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
  {
    vehicleId: "54321",
    vehicleModel: "Toyota",
    vehicleMake: "Camry",
    vehicleYear: "2022",
    vehicleColor: "Red",
    vehicleMaxCapacity: "400 (KG)",
    driver: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    vehicleId: "09876",
    vehicleModel: "Honda",
    vehicleMake: "Civic",
    vehicleYear: "2021",
    vehicleColor: "Blue",
    vehicleMaxCapacity: "400 (KG)",
    driver: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
];
