import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  NumberInput,
  NumberInputField,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { genericInitialAmountState } from "../utils/constants";

const CardSlotPicker = ({
  onAddFunds,
  onClose,
}: {
  onAddFunds: any;
  onClose: any;
}) => {
  //local state
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState(genericInitialAmountState);

  //determine if card values are valid
  const determineIfFormIsInvalid = () => {
    //card number invalid
    if (cardNumber.length !== 16 || isNaN(parseInt(cardNumber))) return true;

    //expiration date invalid
    if (expirationDate === "") return true;

    //cvv invalid
    if (cvv.length !== 3 || isNaN(parseInt(cvv))) return true;

    //amount is zero
    if (Number(amount.value) === 0) return true;
  };

  //reset state
  useEffect(() => {
    setAmount(genericInitialAmountState);
    return () => {};
  }, []);

  return (
    <>
      <ModalBody>
        <VStack>
          <FormControl isRequired={true}>
            <FormLabel htmlFor="email">Card Number</FormLabel>
            <NumberInput
              value={cardNumber}
              onChange={(newCardNumber: string) => setCardNumber(newCardNumber)}
            >
              <NumberInputField
                placeholder="XXXXXXXXXXXXXXXX"
                minLength={16}
                maxLength={16}
              />
            </NumberInput>
          </FormControl>
          <HStack>
            <FormControl isRequired={true}>
              <FormLabel htmlFor="email">Expiration Date</FormLabel>
              <Input
                type="month"
                max={dayjs().format("YYYY-MM")}
                placeholder="Expiration Date"
                onChange={(e: any) => setExpirationDate(e.target.value)}
                value={expirationDate}
              />
              <FormErrorMessage>
                You have to be above 18 to use join us
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired={true}>
              <FormLabel htmlFor="email">CVV</FormLabel>
              <NumberInput>
                <NumberInputField
                  placeholder="XXX"
                  maxLength={3}
                  minLength={3}
                  value={cvv}
                  onChange={(e: any) => setCvv(e.target.value)}
                />
              </NumberInput>
            </FormControl>
          </HStack>
          <FormControl isRequired={true}>
            <FormLabel htmlFor="email">Amount(USD)</FormLabel>
            <NumberInput value={amount.value}>
              <NumberInputField
                onChange={(e: any) =>
                  setAmount({ ...amount, value: e.target.value })
                }
              />
            </NumberInput>
          </FormControl>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button mr={3} onClick={onClose} backgroundColor="transparent">
          Cancel
        </Button>
        <Button
          isDisabled={determineIfFormIsInvalid()}
          onClick={() => onAddFunds(amount)}
        >
          Add Funds
        </Button>
      </ModalFooter>
    </>
  );
};

export default CardSlotPicker;
