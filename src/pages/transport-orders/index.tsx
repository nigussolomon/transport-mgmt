import ProductsLayout from "./_layout";
import { columns, rows } from "@/lib/transport-orders/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconMist } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="TRANSPORT ORDERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconMist size={16} />}
          size="xs"
        >
          NEW TRANSPORT ORDER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Transport Order"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />

        <CustomSelect
          label="Product Code"
          placeholder="Select a product code"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Customer"
          placeholder="Select a customer"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer
        size="xl"
        opened={opened}
        onClose={close}
        title="New Transport Order"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
