export const TOKENS = {
  ETH: "ETH",
  FRAX: "FRAX",
  USDT: "USDT",
  BOBA: "BOBA",
  USDC: "USDC",
  DAI: "DAI",
};

export const BORROW_TOKEN_LIST = [TOKENS.USDC, TOKENS.DAI, TOKENS.ETH];

export const FURUCOMBO_CUBES = [
  {
    title: "Furucombo",
    defiName: "furucombo",
    colors: { from: "#5c5d62", to: "#9e9fa6" },
    options: [
      {
        featureName: "unstake_token",
        title: "Unstake Token",
        outputs: ["COMBO", "ETH/COMBO"],
      },
      { featureName: "clain_combo", title: "Clain COMBO" },
    ],
  },
  {
    title: "Uniswap V2",
    defiName: "uniswapv2",
    colors: { from: "#e6006e", to: "#ff007a" },
    options: [
      {
        featureName: "swap_token",
        title: "Swap Token",
      },
      {
        featureName: "add_liquidity",
        title: "Add Liquidity",
      },
      {
        featureName: "remove_liquidity",
        title: "Remove Liquidity",
        inputs: ["AAVE/ETH", "AKRO/ETH", "ALBT/ETH", "ALPHA/ETH"],
        outputEstimate: [
          { id: "AAVE/ETH", AAVE: 5.29379, ETH: 0.28907 },
          { id: "AKRO/ETH", AKRO: 1134.3547, ETH: 0.00482 },
          { id: "ALBT/ETH", ALBT: 211.12596, ETH: 0.01656 },
          { id: "ALPHA/ETH", ALPHA: 260.16071, ETH: 0.02632 },
        ],
      },
    ],
  },
  {
    title: "Aave V2",
    defiName: "aavev2",
    colors: { from: "#b6509e", to: "#2ebac6" },
    options: [
      {
        featureName: "deposit",
        title: "Deposit",
      },
      {
        featureName: "withdraw",
        title: "Withdraw",
      },
      {
        featureName: "borrow",
        title: "Borrow",
      },
      {
        featureName: "repay",
        title: "Repay",
      },
      {
        featureName: "flashloan",
        title: "Flashloan",
      },
    ],
  },
  {
    title: "Sushiswap",
    defiName: "sushiswap",
    colors: { from: "#d44588", to: "#27b0e6" },

    options: [
      { featureName: "swap_token", title: "Swap Token" },
      { featureName: "add_liquidity", title: "Add Liquidity" },
      { featureName: "remove_liquidity", title: "Remove Liquidity" },
    ],
  },
  {
    title: "Curve",
    defiName: "curve",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "swap_usd",
        title: "Swap USD",
      },
      { title: "Swap BTC", featureName: "swap_btc" },
      { title: "Swap ETH", featureName: "swap_eth" },
      { title: "Swap Crypto", featureName: "swap_crypto" },
      { title: "Swap Other", featureName: "swap_other" },
      { title: "Add Liquidity", featureName: "add_liquidity" },
      { title: "Remove Liquidity", featureName: "remove_liquidity" },
      { title: "Stake Token", featureName: "stake_token" },
      { title: "Claim CRV", featureName: "claim_crv" },
    ],
  },
  {
    title: "Yearn",
    defiName: "yearn",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        title: "Deposit Vault",
        featureName: "deposit_vault",
      },
      { title: "Withdraw Vault", featureName: "withdraw_vault" },
    ],
  },
  {
    title: "Compound",
    defiName: "compound",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "supply",
        title: "Supply",
      },
      {
        featureName: "withdraw",
        title: "Withdraw",
      },
      {
        featureName: "repay",
        title: "Repay",
      },
      {
        featureName: "collect_comp",
        title: "Collect COMP",
      },
    ],
  },
  {
    title: "Maker",
    defiName: "maker",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      { title: "New Vault", featureName: "new_vault" },
      { title: "Deposit", featureName: "deposit" },
      { title: "Withdraw", featureName: "withdraw" },
      { title: "Generate", featureName: "generate" },
      { title: "Pay Back", featureName: "pay_back" },
    ],
  },
  {
    title: "1inch",
    defiName: "oneinch",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "swap_token",
        title: "Swap Token",
      },
    ],
  },
  {
    title: "Paraswap",
    defiName: "paraswap",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "swap_token",
        title: "Swap Token",
      },
    ],
  },
  {
    title: "Uniswap V3",
    defiName: "uniswapv3",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "swap_token",
        title: "Swap Token",
      },
    ],
  },
  {
    title: "B‧Protocol",
    defiName: "bprotocol",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      {
        featureName: "new_vault",
        title: "New Vault",
      },
      { featureName: "new_vault", title: "New Vault" },
      { featureName: "deposit", title: "Deposit" },
      { featureName: "withdraw", title: "Withdraw" },
      { featureName: "generate", title: "Generate" },
      { featureName: "pay_back", title: "Pay Back" },
    ],
  },
  {
    title: "Synthetix",
    defiName: "synthetix",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      { featureName: "stake_token", title: "Stake Token" },
      { featureName: "claim_rewards", title: "Claim Rewards" },
      { featureName: "unstake_token", title: "Unstake Token" },
      { featureName: "claim_and_unstake", title: "Claim & Unstake" },
    ],
  },
  {
    title: "Utility",
    defiName: "utility",
    colors: { from: "#5c5d62", to: "#9e9fa6" },

    options: [
      { featureName: "send_token", title: "Send Token" },
      { featureName: "weth", title: "WETH" },
      { featureName: "add_funds", title: "Add Funds" },
      { featureName: "return_funds", title: "Return Funds" },
      { featureName: "gas_saver", title: "Gas Saver" },
      { featureName: "token_bridge", title: "Token Bridge" },
    ],
  },
];
