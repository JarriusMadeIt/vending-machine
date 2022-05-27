import {
  Box,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addFunds } from "../utils/actions/balanceActions";
import { FundingOptions } from "../utils/constants";
import { generateFundingOptionTitle } from "../utils/helpers/textHelpers";
import CardSlotPicker from "./CardSlotPicker";
import CoinSlotPicker from "./CoinSlotPicker";
import NotesSlotPicker from "./NotesSlotPicker";

const AddFundsModal = () => {
  //hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  //state
  const [fundingOption, setFundingOption] = useState("COIN_SLOT");

  //add funds handler
  const onAddFunds = (amount: any) => {
    dispatch(addFunds(amount.value));
    onClose();
    toast({
      title: "Funds Added!",
      description: `${amount.currency.symbol}${amount.value} ${amount.currency.cc} added to your balance`,
      status: "success",
      isClosable: true,
    });
  };

  //render selected funding option
  const renderFundingOption = () => {
    switch (fundingOption) {
      case FundingOptions.COIN_SLOT:
        return <CoinSlotPicker onClose={onClose} onAddFunds={onAddFunds} />;
      case FundingOptions.CARD_SLOT:
        return <CardSlotPicker onClose={onClose} onAddFunds={onAddFunds} />;
      case FundingOptions.NOTES_SLOT:
        return <NotesSlotPicker onClose={onClose} onAddFunds={onAddFunds} />;
    }
  };

  return (
    <>
      <IconButton
        aria-label="add-funds"
        icon={<FiPlus color="black" />}
        borderRadius="full"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"bold"}>Add Funds</ModalHeader>
          <ModalCloseButton />

          <HStack alignItems={"center"} justifyContent="center">
            {Object.keys(FundingOptions).map((option) => (
              <Flex
                key={option}
                backgroundColor="gray.100"
                p={5}
                borderRadius="10"
                borderWidth={3}
                borderColor={option === fundingOption ? "black" : "gray.100"}
                cursor="pointer"
                onClick={() => setFundingOption(option)}
              >
                {generateFundingOptionTitle(option)}
              </Flex>
            ))}
          </HStack>
          <Box pt={5}>{renderFundingOption()}</Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddFundsModal;
