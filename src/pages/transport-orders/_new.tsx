import CustomSelect from "@/components/ui/inputs/select/select";
import CustomDateInput from "@/components/ui/inputs/dateInput/dateInput";
import { columns, rows } from "@/lib/transport-orders/newTableProps";
import CustomTable from "@/components/ui/table/table";

import { Group, Button, Divider, Text } from "@mantine/core";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomSelect
            data={[]}
            label="Transporter"
            placeholder="Transporter"
          />
          <CustomSelect
            data={[]}
            label="Order Manager"
            placeholder="Order Manager"
          />
        </Group>
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomDateInput label="Pickup Date" placeholder="Pickup Date" />
          <CustomDateInput label="Delivery Date" placeholder="Delivery Date" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Text>Order Items</Text>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect
            data={[]}
            label="Order Reference"
            placeholder="Order Reference"
          />
          <CustomSelect data={[]} label="Order Item" placeholder="Order Item" />
        </Group>
        <Group align="flex-end" grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Vehicle" placeholder="Vehicle" />
          <CustomTextInput
            label="Order Item Quantity"
            placeholder="Order Item Quantity"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Button fullWidth size="sm" color="dark">
            ADD ITEM
          </Button>
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTable pagingOff columns={columns} rows={rows} />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
