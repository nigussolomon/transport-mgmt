import ProductsLayout from "./_layout";
import { columns, rows } from "@/lib/vehicle/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconCar } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="VEHICLES"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconCar size={16} />}
          size="xs"
        >
          NEW VEHICLE
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Vehicle"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />

        <CustomSelect
          label="Vehicle Model"
          placeholder="Select a vehicle model"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Vehicle Make"
          placeholder="Select a vehicle make"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Vehicle Year"
          placeholder="Select a vehicle year"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Vehicle Driver"
          placeholder="Select a vehicle driver"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer size="lg" opened={opened} onClose={close} title="New Vehicle">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
