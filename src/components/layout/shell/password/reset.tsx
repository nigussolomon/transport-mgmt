import { Box, Button, Text, Group, Title } from "@mantine/core";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import {useRouter} from 'next/router';

export default function ResetPasswordForm() {
  const router = useRouter();
  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: "400px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Group gap="md">
          <Group grow style={{ width: "100%" }}>
            <Title ta="center">Reset Password</Title>
          </Group>
          <Group grow style={{ width: "100%" }}>
            <Text ta="center" mb="md" color="dimmed" size="sm">
              Enter your new password and confirm
            </Text>
          </Group>
          <Group grow style={{ width: "100%" }}>
            <CustomTextInput label="New Password" placeholder="New Password" />
          </Group>
          <Group grow style={{ width: "100%" }}>
            <CustomTextInput
              label="Confirm Password"
              placeholder="Confirm Password"
            />
          </Group>
          <Button fullWidth color="dark" size="md">
            Submit
          </Button>
          <Button
            onClick={() => router.push("/")}
            variant="light"
            fullWidth
            color="dark"
            size="md"
          >
            Cancel
          </Button>
        </Group>
      </Box>
    </Box>
  );
}
