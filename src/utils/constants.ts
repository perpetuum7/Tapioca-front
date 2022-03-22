export const TOKENS = {
  ETH: "ETH",
  FRAX: "FRAX",
  USDT: "USDT",
  BOBA: "BOBA",
  USDC: "USDC",
  DAI: "DAI",
};

export const BORROW_TOKEN_LIST = [TOKENS.USDC, TOKENS.DAI, TOKENS.ETH];

export const FURUCOMBO_TYPES = {
  FURUCOMBO_CLAIM_OUTPUT: "FURUCOMBO_CLAIM_OUTPUT",
  FURUCOMBO_SWAP: "FURUCOMBO_SWAP",
  FURUCOMBO_VAULT: "FURUCOMBO_VAULT",
  FURUCOMBO_ADDRESS: "FURUCOMBO_ADDRESS",
  FURUCOMBO_ADDRESS_OR_ENS: "FURUCOMBO_ADDRESS_OR_ENS",
  FURUCOMBO_ASSET: "FURUCOMBO_ASSET",
  FURUCOMBO_TRADING_PARS: "FURUCOMBO_TRADING_PARS",
  FURUCOMBO_MULTIPLE_INPUTS: "FURUCOMBO_MULTIPLE_INPUTS",
  FURUCOMBO_BRIGDE: "FURUCOMBO_BRIGDE",
  FURUCOMBO_POOL: "FURUCOMBO_POOL",
  FURUCOMBO_INPUT_TOKEN: "FURUCOMBO_INPUT_TOKEN",
  FURUCOMBO_OUTPUT_TOKEN: "FURUCOMBO_OUTPUT_TOKEN",
  FURUCOMBO_TRADING_OUTPUT_PARS: "FURUCOMBO_TRADING_OUTPUT_PARS",
};

export const FURUCOMBO_CUBES = [
  {
    title: "Furucombo",
    defiName: "furucombo",
    colors: { from: "#5c5d62", to: "#9e9fa6" },
    options: [
      // {
      //   featureName: "unstake_token",
      //   title: "Unstake Token",
      //   type: "",
      //   outputs: ["COMBO", "ETH/COMBO"],
      // },
      {
        featureName: "clain_combo",
        title: "Clain COMBO",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "COMBO",
      },
    ],
  },
  // {
  //   title: "Uniswap V2",
  //   defiName: "uniswapv2",
  //   colors: { from: "#e6006e", to: "#ff007a" },
  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //       inputs: ["1INCH", "AAVE", "ADX", "AKRO", "ALBT"],
  //       outputEstimate: [
  //         {
  //           id: "1INCH",
  //           AAVE: 0.00984,
  //           ADX: 3.75209,
  //           AKRO: 125.76352,
  //           ALBT: 6.63339,
  //         },
  //         {
  //           id: "AAVE",
  //           "1INCH": 100.27142,
  //           ADX: 378.58528,
  //           AKRO: 12687.62371,
  //           ALBT: 669.42873,
  //         },
  //         {
  //           id: "ADX",
  //           "1INCH": 0.35047,
  //           AAVE: 0.0026,
  //           AKRO: 33.31682,
  //           ALBT: 1.75732,
  //         },
  //         {
  //           id: "AKRO",
  //           "1INCH": 0.01906,
  //           AAVE: 0.00013,
  //           ADX: 0.05314,
  //           ALBT: 0.09433,
  //         },
  //         {
  //           id: "ALBT",
  //           "1INCH": 0.19977,
  //           AAVE: 0.00147,
  //           ADX: 0.56224,
  //           AKRO: 18.84516,
  //         },
  //       ],
  //     },
  //     {
  //       featureName: "add_liquidity",
  //       title: "Add Liquidity",
  //     },
  //     {
  //       featureName: "remove_liquidity",
  //       title: "Remove Liquidity",
  //       inputs: ["AAVE/ETH", "AKRO/ETH", "ALBT/ETH", "ALPHA/ETH"],
  //       outputEstimate: [
  //         { id: "AAVE/ETH", AAVE: 5.29379, ETH: 0.28907 },
  //         { id: "AKRO/ETH", AKRO: 1134.3547, ETH: 0.00482 },
  //         { id: "ALBT/ETH", ALBT: 211.12596, ETH: 0.01656 },
  //         { id: "ALPHA/ETH", ALPHA: 260.16071, ETH: 0.02632 },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Aave V2",
  //   defiName: "aavev2",
  //   colors: { from: "#b6509e", to: "#2ebac6" },
  //   options: [
  //     {
  //       featureName: "deposit",
  //       title: "Deposit",
  //     },
  //     {
  //       featureName: "withdraw",
  //       title: "Withdraw",
  //     },
  //     {
  //       featureName: "borrow",
  //       title: "Borrow",
  //     },
  //     {
  //       featureName: "repay",
  //       title: "Repay",
  //     },
  //     {
  //       featureName: "flashloan",
  //       title: "Flashloan",
  //     },
  //   ],
  // },
  // {
  //   title: "Sushiswap",
  //   defiName: "sushiswap",
  //   colors: { from: "#d44588", to: "#27b0e6" },

  //   options: [
  //     { featureName: "swap_token", title: "Swap Token" },
  //     { featureName: "add_liquidity", title: "Add Liquidity" },
  //     { featureName: "remove_liquidity", title: "Remove Liquidity" },
  //   ],
  // },
  {
    title: "Curve",
    defiName: "curve",
    colors: { from: "#000FFF", to: "#3465A4" },
    options: [
      //     {
      //       featureName: "swap_usd",
      //       title: "Swap USD",
      //     },
      //     { title: "Swap BTC", featureName: "swap_btc" },
      //     { title: "Swap ETH", featureName: "swap_eth" },
      //     { title: "Swap Crypto", featureName: "swap_crypto" },
      //     { title: "Swap Other", featureName: "swap_other" },
      //     { title: "Add Liquidity", featureName: "add_liquidity" },
      //     { title: "Remove Liquidity", featureName: "remove_liquidity" },
      //     { title: "Stake Token", featureName: "stake_token" },
      {
        title: "Claim CRV",
        featureName: "claim_crv",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "CRV",
      },
    ],
  },
  // {
  //   title: "Yearn",
  //   defiName: "yearn",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       title: "Deposit Vault",
  //       featureName: "deposit_vault",
  //     },
  //     { title: "Withdraw Vault", featureName: "withdraw_vault" },
  //   ],
  // },
  {
    title: "Compound",
    defiName: "compound",
    colors: { from: "#2E9F9A", to: "#00D395" },
    options: [
      //   {
      //     featureName: "supply",
      //     title: "Supply",
      //   },
      //   {
      //     featureName: "withdraw",
      //     title: "Withdraw",
      //   },
      //   {
      //     featureName: "repay",
      //     title: "Repay",
      //   },
      {
        featureName: "collect_comp",
        title: "Collect COMP",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "COMP",
      },
    ],
  },
  // {
  //   title: "Maker",
  //   defiName: "maker",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     { title: "New Vault", featureName: "new_vault" },
  //     { title: "Deposit", featureName: "deposit" },
  //     { title: "Withdraw", featureName: "withdraw" },
  //     { title: "Generate", featureName: "generate" },
  //     { title: "Pay Back", featureName: "pay_back" },
  //   ],
  // },
  // {
  //   title: "1inch",
  //   defiName: "oneinch",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "Paraswap",
  //   defiName: "paraswap",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "Uniswap V3",
  //   defiName: "uniswapv3",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "B‧Protocol",
  //   defiName: "bprotocol",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "new_vault",
  //       title: "New Vault",
  //     },
  //     { featureName: "new_vault", title: "New Vault" },
  //     { featureName: "deposit", title: "Deposit" },
  //     { featureName: "withdraw", title: "Withdraw" },
  //     { featureName: "generate", title: "Generate" },
  //     { featureName: "pay_back", title: "Pay Back" },
  //   ],
  // },
  // {
  //   title: "Synthetix",
  //   defiName: "synthetix",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     { featureName: "stake_token", title: "Stake Token" },
  //     { featureName: "claim_rewards", title: "Claim Rewards" },
  //     { featureName: "unstake_token", title: "Unstake Token" },
  //     { featureName: "claim_and_unstake", title: "Claim & Unstake" },
  //   ],
  // },
  // {
  //   title: "Utility",
  //   defiName: "utility",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     { featureName: "send_token", title: "Send Token" },
  //     { featureName: "weth", title: "WETH" },
  //     { featureName: "add_funds", title: "Add Funds" },
  //     { featureName: "return_funds", title: "Return Funds" },
  //     { featureName: "gas_saver", title: "Gas Saver" },
  //     { featureName: "token_bridge", title: "Token Bridge" },
  //   ],
  // },
];
