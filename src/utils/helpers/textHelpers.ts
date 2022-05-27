/**
 * Generate presentable funding option text
 * @param option
 * @returns
 */
export const generateFundingOptionTitle = (option: string) => {
  switch (option) {
    case "COIN_SLOT":
      return "💰 Coin";
    case "CARD_SLOT":
      return "💳 Credit Card";
    case "NOTES_SLOT":
      return "💵 Notes";
    default:
      return "";
  }
};
