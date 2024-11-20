import { Center, Container, Title, Text, Button, Group } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";
import { useRouter } from "next/router";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import ResetPasswordForm from "@/components/layout/shell/password/reset";

export default function ResetPassword() {
  const router = useRouter();
  const query = router.query;
  const token = query.token as string;

  return (
    <Container size={600} my={120}>
      {token ? (
        <ResetPasswordForm />
      ) : (
        <>
          <Title ta="center">Reset Password</Title>
          <Text mb="md" ta="center" color="dimmed" size="sm">
            Enter your email to receive a reset password link
          </Text>

          <CustomTextInput label="Email" placeholder="your@email.com" />

          <Button fullWidth mt="xs" size="md" color="dark">
            Reset Password
          </Button>
          <Button
            variant="light"
            onClick={() => router.push("/")}
            fullWidth
            mt="xs"
            size="md"
            color="dark"
          >
            Back to Login
          </Button>
        </>
      )}
    </Container>
  );
}
