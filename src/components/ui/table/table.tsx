import {
  Table,
  Progress,
  Text,
  Group,
  Pagination,
  Divider,
} from "@mantine/core";
import classes from "./table.module.css";

export type Column<T> = {
  label: string;
  accessor: keyof T | "reviewDistribution" | "action";
  render?: (row: T) => React.ReactNode;
};

export type Reviews = {
  positive: number;
  negative: number;
};

interface CustomTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  total?: number;
  page?: number;
  perPage?: number;
  pagingOff?: boolean;
}

export default function CustomTable<T extends { reviews: Reviews }>({
  columns,
  rows,
  total = 10,
  page = 1,
  perPage = 10,
  pagingOff = false,
}: CustomTableProps<T>) {
  const tableRows = rows.map((row, index) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <Table.Tr key={index}>
        {columns.map((col) => {
          if (col.accessor === "reviewDistribution") {
            return (
              <Table.Td key={index}>
                <Group justify="space-between">
                  <Text fz="xs" c="teal" fw={700}>
                    {positiveReviews.toFixed(0)}%
                  </Text>
                  <Text fz="xs" c="red" fw={700}>
                    {negativeReviews.toFixed(0)}%
                  </Text>
                </Group>
                <Progress.Root>
                  <Progress.Section
                    className={classes.progressSection}
                    value={positiveReviews}
                    color="teal"
                  />
                  <Progress.Section
                    className={classes.progressSection}
                    value={negativeReviews}
                    color="red"
                  />
                </Progress.Root>
              </Table.Td>
            );
          }

          return (
            <Table.Td key={index}>
              {col.render
                ? col.render(row)
                : (row[col.accessor as keyof T] as React.ReactNode)}
            </Table.Td>
          );
        })}
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={700}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            {columns.map((col) => (
              <Table.Th key={col.accessor as string}>{col.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{tableRows}</Table.Tbody>
      </Table>
      {!pagingOff && (
        <>
          <Divider my="md" />
          <Group justify="flex-end" align="center" p="xs">
            <Pagination
              color="dark"
              total={total / perPage}
              value={page}
              onChange={console.log}
            />
          </Group>
        </>
      )}
    </Table.ScrollContainer>
  );
}
