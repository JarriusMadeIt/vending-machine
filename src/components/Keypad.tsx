import {
  Button,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import BuySnackModal from "./BuySnackModal";

const Keypad = () => {
  //state
  const [snackNumber, setSnackNumber]: any = useState("");

  return (
    <>
      <VStack
        maxWidth="container.xl"
        spacing={2}
        backgroundColor="black"
        pt={2}
      >
        <HStack minW="full" backgroundColor={"transparent"}>
          <Input
            readOnly
            type="number"
            size="lg"
            backgroundColor="white"
            value={snackNumber}
            placeholder="Use keypad to enter snack number...(1-25)"
          />
        </HStack>
        <SimpleGrid columns={3} spacing={2} width="full">
          {Array.from({ length: 9 }).map((_, index) => (
            <Flex
              width={"full"}
              backgroundColor={"white"}
              key={index + 1}
              height="70px"
              alignItems={"center"}
              justifyContent="center"
              borderRadius={10}
              cursor="pointer"
              onClick={() =>
                setSnackNumber(
                  (oldSnackNumber: string) => `${oldSnackNumber}${index + 1}`
                )
              }
            >
              <Text fontSize={"2xl"} fontWeight="black">
                {index + 1}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
        <HStack w="full">
          <Button
            w="full"
            borderRadius={10}
            bg="white"
            onClick={() => setSnackNumber("")}
          >
            Reset
          </Button>
          <BuySnackModal
            snackNumber={snackNumber}
            setSnackNumber={setSnackNumber}
          />
        </HStack>
      </VStack>
    </>
  );
};

export default Keypad;
