import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
  Menu,
  Avatar,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./linkgroup.module.css";
import { useRouter } from "next/router";

interface LinksGroupProps {
  icon: React.FC<any>;
  color?: string;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  path?: string;
  menu?: boolean;
  profile?: boolean;
  menuOptions?: {
    label: string;
    action: () => void;
    icon: React.FC<any>;
    color?: string;
  }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  path,
  color,
  menu,
  profile,
  menuOptions,
}: LinksGroupProps) {
  const router = useRouter();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(
    initiallyOpened || links?.some((l) => router.pathname == l.link) || false
  );
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={classes.link}
      style={{
        color: router.asPath === link.link ? "black" : undefined,
      }}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        router.push(link.link);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      {menu ? (
        <>
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <UnstyledButton
                style={{ color: color ? color : undefined }}
                onClick={() => {
                  if (path) {
                    router.push(path);
                  } else {
                    setOpened((o) => !o);
                  }
                }}
                className={classes.control}
              >
                <Group justify="space-between" gap={0}>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    {profile ? (
                      <Avatar
                        radius="sm"
                        size={28}
                        name="System Admin"
                        color="dark"
                        variant="filled"
                      />
                    ) : (
                      <ThemeIcon
                        variant={color? "filled" : "default"}
                        size={30}
                        color={color || "dark"}
                      >
                        <Icon style={{ width: rem(18), height: rem(18) }} />
                      </ThemeIcon>
                    )}
                    <Box ml="md">{label}</Box>
                  </Box>
                </Group>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              {menuOptions?.map((option) => (
                <Menu.Item
                  leftSection={
                    <option.icon style={{ width: rem(14), height: rem(14) }} />
                  }
                  color={option.color}
                  key={option.label}
                  onClick={option.action}
                >
                  {option.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </>
      ) : (
        <UnstyledButton
          style={{ color: color ? color : undefined }}
          onClick={() => {
            if (path) {
              router.push(path);
            } else {
              setOpened((o) => !o);
            }
          }}
          className={classes.control}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon
                variant={
                  router.pathname == path ||
                  (links?.some((l) => router.pathname == l.link) ? true : false)
                    ? "filled"
                    : color
                    ? "filled"
                    : "default"
                }
                size={30}
                color={color || "dark"}
              >
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}

      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export default function LinkGroup({ data }: { data: LinksGroupProps[] }) {
  return (
    <Box>
      {data.map((link, index) => (
        <LinksGroup {...link} key={index} />
      ))}
    </Box>
  );
}
