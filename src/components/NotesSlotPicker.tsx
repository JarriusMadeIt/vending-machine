import {
  Box,
  Button,
  Flex,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  genericInitialAmountState,
  notesFundingAmounts,
} from "../utils/constants";

const initialAmountState = {
  value: notesFundingAmounts[0],
  currency: genericInitialAmountState.currency,
};

const NotesSlotPicker = ({
  onAddFunds,
  onClose,
}: {
  onAddFunds: any;
  onClose: any;
}) => {
  //state
  const [amount, setAmount] = useState(initialAmountState);

  //set amount on first render
  useEffect(() => {
    setAmount(initialAmountState);
    return () => {};
  }, []);

  return (
    <>
      <ModalBody>
        <Flex alignItems={"center"} justifyContent="center" wrap={"wrap"}>
          {notesFundingAmounts.map((option) => (
            <Flex
              key={option}
              backgroundColor="gray.100"
              p={5}
              borderRadius="10"
              borderWidth={3}
              borderColor={option === amount.value ? "black" : "gray.100"}
              cursor="pointer"
              onClick={() => {
                setAmount((oldAmount) => ({ ...oldAmount, value: option }));
              }}
              m={1.5}
            >
              <Flex mx={1}>
                <Text>{"$"}</Text>
                <Text fontWeight={"bold"}>{option}</Text>
              </Flex>
              <Text>{"USD"}</Text>
            </Flex>
          ))}
        </Flex>
        <Box mt={5}>
          <Flex alignItems={"center"} justifyContent="center">
            <Text>Total funding amount:</Text>
            <Flex mx={1}>
              <Text>{amount.currency.symbol}</Text>
              <Text fontWeight={"bold"}>{amount.value}</Text>
            </Flex>
            <Text>{amount.currency.cc}</Text>
          </Flex>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Button mr={3} onClick={onClose} backgroundColor="transparent">
          Cancel
        </Button>
        <Button onClick={() => onAddFunds(amount)}>Add Funds</Button>
      </ModalFooter>
    </>
  );
};

export default NotesSlotPicker;
