import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Text,
  Divider,
  Flex,
  Card,
  ScrollArea,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "@/components/layout/shell/linkgroup/linkgroup";
import {
  IconPackage,
  IconCategory2,
  IconChevronRight,
  IconLifebuoy,
  IconLogout,
  IconBuildingWarehouse,
  IconUsersGroup,
  IconUserSquareRounded,
  IconBrandAppgallery,
  IconLockSquareRounded,
  IconCalendarEvent,
  IconUsers,
  IconTir,
  IconMist,
  IconCar
} from "@tabler/icons-react";
import { useRouter } from "next/router";
import PasswordChange from "@/components/layout/shell/password/change";

export default function Shell({
  children,
  title,
  action,
}: {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const [opened2, { toggle: toggle2 }] = useDisclosure();
  const router = useRouter();

  const upperNavData = [
    {
      label: "Transporters",
      icon: IconTir,
      links: [
        { label: "Internal Transporters", link: "/transporter/internal" },
        { label: "Outsourced Transporters", link: "/transporter/outsourced" },
      ],
    },
    {
      label: "Drivers",
      icon: IconUsers,
      path: "/drivers",
    },
    {
      label: "Vehicles",
      icon: IconCar,
      path: "/vehicle",
    },
    {
      label: "Transport Orders",
      icon: IconMist,
      path: "/transport-orders",
    },
    {
      label: "System Personal",
      icon: IconUsersGroup,
      links: [
        {
          label: "Transporter Managers",
          link: "/personal/transporter-managers",
        },
        {
          label: "Order Managers",
          link: "/personal/order-managers",
        },
        { label: "System Admins", link: "/personal/system-admins" },
      ],
    },
  ];

  const lowerNavData = [
    {
      label: "Help",
      icon: IconLifebuoy,
      path: "/help",
    },
    {
      label: "System Admin",
      icon: IconUserSquareRounded,
      menu: true,
      profile: true,
      menuOptions: [
        {
          label: "Forgot Password",
          action: () => {
            router.push("/reset-password");
          },
          icon: IconLockSquareRounded,
        },
        {
          label: "Change Password",
          action: () => {
            toggle2();
          },
          icon: IconLockSquareRounded,
        },
        {
          label: "Logout",
          action: () => {
            router.push("/");
          },
          icon: IconLogout,
          color: "red",
        },
      ],
    },
  ];

  return (
    <AppShell
      layout="alt"
      header={{ height: 62 }}
      footer={{ height: 50 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Drawer title="Change Password" opened={opened2} onClose={toggle2}>
        <PasswordChange />
      </Drawer>
      <AppShell.Header>
        <Group h="100%" justify="space-between" pr="md">
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            {title && <Text fw={500}>{title}</Text>}
          </Group>
          {action && action}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <AppShell.Section>
          {" "}
          <Flex justify="space-between" gap="sm" align="center" p="xs">
            <Flex gap={5} align="center">
              <IconTir size={18} stroke={1.5} />
              <Text size="sm" fw={500}>
                TRANSPORT MGMT.
              </Text>
            </Flex>
            <Group>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
            </Group>
          </Flex>
          <Divider color="dark" size="xs" my="xs" />
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          <LinkGroup data={upperNavData} />
        </AppShell.Section>
        <AppShell.Section>
          <Divider color="dark" size="xs" my="sm" />
          <LinkGroup data={lowerNavData} />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Text>
          &copy; {new Date().getFullYear()} Mentor Knowledge Solutions (MKS)
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
