import { TOKENS_SYMBOLS } from "./tokens";
import {
  Furucombo,
  Uniswapv2,
  Aave,
  Sushiswap,
  Curve,
  Yearn,
  Compound,
  Maker,
  // OneInch,
  // Paraswap,
  // UniswapV3,
  Bprotocol,
  Synthetix,
  Utility,
} from "./furucomboConfig";

const TOKENS = TOKENS_SYMBOLS;

export const LOAN_LIST = [
  {
    token: TOKENS.WETH,
    collateral: TOKENS.USDC,
    apy: 0.25,
    prices: {
      [TOKENS.USDC]: 1.12,
    },
  },
  {
    token: TOKENS.DAI,
    collateral: TOKENS.USDT,
    apy: 0.25,
    prices: {
      [TOKENS.USDC]: 1.12,
    },
  },
  {
    token: TOKENS.DAI,
    collateral: TOKENS.ETH,
    apy: 0.25,
    prices: {
      [TOKENS.USDC]: 1.12,
    },
  },
  {
    token: TOKENS.DAI,
    collateral: TOKENS.BOBA,
    apy: 0.25,
    prices: {
      [TOKENS.USDC]: 1.12,
    },
  },
];

export const FURUCOMBO_CUBES = [
  Furucombo,
  Uniswapv2,
  Aave,
  Sushiswap,
  Curve,
  Yearn,
  Compound,
  Maker,
  // OneInch,
  // Paraswap,
  // UniswapV3,
  Bprotocol,
  Synthetix,
  Utility,
];
