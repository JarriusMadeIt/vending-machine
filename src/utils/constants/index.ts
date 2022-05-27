/**
 * Funding options for balance
 */
export enum FundingOptions {
  "COIN_SLOT" = "COIN_SLOT",
  "CARD_SLOT" = "CARD_SLOT",
  "NOTES_SLOT" = "NOTES_SLOT",
}

/**
 * Generic initial amount state(price or balance)
 */
export const genericInitialAmountState = {
  value: "0.00",
  currency: {
    cc: "USD",
    symbol: "$",
    name: "United States dollar",
  },
};

/**
 * Coin funding amounts
 */
export const coinFundingAmounts = ["0.10", "0.20", "0.50", "1.00"];

/**
 * Notes funding amounts
 */
export const notesFundingAmounts = ["20", "50"];

/**
 * SnackTypes
 */
export const snackTypes = [
  "🍫",
  "🍉",
  "🥧",
  "🍰",
  "🎂",
  "🍪",
  "🍩",
  "🍨",
  "🍧",
  "🍦",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍡",
  "🍤",
  "🍚",
  "🍜",
  "🍛",
  "🍝",
  "🍣",
  "🌯",
  "🥨",
  "🥞",
  "🧆",
];
