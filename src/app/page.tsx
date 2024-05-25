import { ThemeSwitcher } from "@/components";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Callout,
  Card,
  Container,
  Flex,
  Text,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <Container>
      <Box width="500px">
        <Card size="4">
          <Flex
            gap="4"
            align="center"
          >
            <Avatar
              size="5"
              radius="full"
              fallback="Hi!"
            />
            <Box>
              <Text
                as="div"
                size="4"
                weight="bold"
              >
                Hi, there! 👋
              </Text>
              <Text
                as="div"
                size="3"
              >
                This app shows you how to integrate Radix Theme into Nextjs with
                your own color palette.
              </Text>
            </Box>
          </Flex>
          <Flex
            justify="center"
            gap="2"
            align="center"
            pt="4"
          >
            <Text
              as="div"
              size="2"
            >
              Use the button icon to change theme 👉🏻
            </Text>
            <ThemeSwitcher />
          </Flex>
        </Card>
      </Box>
      <Box
        width="500px"
        py="5"
      >
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            After generating the personal color palette, the values must be
            passed to the Theme component.
          </Callout.Text>
        </Callout.Root>
      </Box>
    </Container>
  );
}
