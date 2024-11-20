import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Flex,
} from "@mantine/core";
import { IconTir } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <Container size={620} my={120}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Flex justify="space-between" align="center">
          <Title size="md" ta="left">
            TRANSPORT MGMT.
          </Title>
          <IconTir />
        </Flex>
        <Divider my="md" />
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox color="dark" label="Remember me" />
          <Anchor
            onClick={(event) => {
              event.preventDefault();
              router.push("/reset-password");
            }}
            href="#"
            size="sm"
            color=""
          >
            Forgot password?
          </Anchor>
        </Group>
        <Divider my="sm" />
        <Button
          color="dark"
          onClick={() => router.push("/transporter/internal")}
          size="md"
          fullWidth
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
