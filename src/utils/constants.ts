import { TOKENS_SYMBOLS } from "./tokens";
import {
  Furucombo,
  Uniswapv2,
  Aave,
  Sushiswap,
  Curve,
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
    apy: 0,
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
  Compound,
  Maker,
  // OneInch,
  // Paraswap,
  // UniswapV3,
  Bprotocol,
  Synthetix,
  Utility,
];
