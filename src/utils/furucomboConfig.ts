import {
  TOKENS_SYMBOLS,
  FURUCOMBO_AAVE_TOKENS,
  FURUCOMBO_UTILITY_TOKENS,
  NEW_VAULT_ASSETS,
  NEW_VAULT_ETH_ASSETS,
} from "./tokens";

export const FURUCOMBO_TYPES = {
  FURUCOMBO_CLAIM_OUTPUT: "FURUCOMBO_CLAIM_OUTPUT",
  FURUCOMBO_SWAP: "FURUCOMBO_SWAP",
  FURUCOMBO_VAULT: "FURUCOMBO_VAULT",
  FURUCOMBO_ADDRESS: "FURUCOMBO_ADDRESS",
  FURUCOMBO_ADDRESS_OR_ENS: "FURUCOMBO_ADDRESS_OR_ENS",
  FURUCOMBO_NEW_VAULT: "FURUCOMBO_NEW_VAULT",
  FURUCOMBO_TRADING_PARS: "FURUCOMBO_TRADING_PARS",
  FURUCOMBO_MULTIPLE_INPUTS: "FURUCOMBO_MULTIPLE_INPUTS",
  FURUCOMBO_BRIGDE: "FURUCOMBO_BRIGDE",
  FURUCOMBO_POOL: "FURUCOMBO_POOL",
  FURUCOMBO_INPUT_TOKEN: "FURUCOMBO_INPUT_TOKEN",
  FURUCOMBO_OUTPUT_TOKEN: "FURUCOMBO_OUTPUT_TOKEN",
  FURUCOMBO_TRADING_OUTPUT_PARS: "FURUCOMBO_TRADING_OUTPUT_PARS",
};

const FURUCOMBO_FEATURES = {
  stake_token: {
    title: "Stake Token",
    featureName: "stake_token",
  },
  unstake_token: {
    featureName: "unstake_token",
    title: "Unstake Token",
  },
  clain_combo: {
    featureName: "clain_combo",
    title: "Clain COMBO",
  },
  add_liquidity: {
    featureName: "add_liquidity",
    title: "Add Liquidity",
  },
  remove_liquidity: {
    featureName: "remove_liquidity",
    title: "Remove Liquidity",
  },
  borrow: { featureName: "borrow", title: "Borrow" },
  repay: {
    featureName: "repay",
    title: "Repay",
  },
  flashloan: {
    featureName: "flashloan",
    title: "Flashloan",
  },
  send_token: {
    featureName: "send_token",
    title: "Send Token",
  },
  swap_token: {
    featureName: "swap_token",
    title: "Swap Token",
  },
  deposit: {
    featureName: "deposit",
    title: "Deposit",
  },
  depositVault: {
    featureName: "depositVault",
    title: "Deposit Vault",
  },
  withdraw: {
    featureName: "withdraw",
    title: "Withdraw",
  },
  swap_usd: {
    featureName: "swap_usd",
    title: "Swap USD",
  },
  claim_crv: {
    title: "Claim CRV",
    featureName: "claim_crv",
  },
  collect_comp: {
    featureName: "collect_comp",
    title: "Collect COMP",
  },
  generate: {
    title: "Generate",
    featureName: "generate",
  },
  pay_back: {
    title: "Pay Back",
    featureName: "pay_back",
  },
  gas_saver: {
    featureName: "gas_saver",
    title: "Gas Saver",
  },
  claim_rewards: {
    featureName: "claim_rewards",
    title: "Claim Rewards",
  },
  token_bridge: { featureName: "token_bridge", title: "Token Bridge" },
  claim_and_unstake: {
    featureName: "claim_and_unstake",
    title: "Claim & Unstake",
  },
  add_funds: {
    featureName: "add_funds",
    title: "Add Funds",
  },
  return_funds: {
    featureName: "return_funds",
    title: "Return Funds",
  },
  new_vault: {
    featureName: "new_vault",
    title: "New Vault",
  },
  supply: {
    featureName: "supply",
    title: "Supply",
  },
  //     { title: "Swap BTC", featureName: "swap_btc" },
  //     { title: "Swap ETH", featureName: "swap_eth" },
  //     { title: "Swap Crypto", featureName: "swap_crypto" },
  //     { title: "Swap Other", featureName: "swap_other" },
  weth: { featureName: "weth", title: "WETH" },
};

export const Furucombo = {
  title: "Furucombo",
  defiName: "furucombo",
  colors: { from: "#5c5d62", to: "#9e9fa6" },
  options: [
    {
      ...FURUCOMBO_FEATURES.unstake_token,
      type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
      tokens: [TOKENS_SYMBOLS.COMBO, "ETH/COMBO"],
    },
    {
      ...FURUCOMBO_FEATURES.clain_combo,
      type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
      token: TOKENS_SYMBOLS.COMBO,
    },
  ],
};

export const Uniswapv2 = {
  title: "Uniswap V2",
  defiName: "uniswapv2",
  colors: { from: "#e6006e", to: "#ff007a" },
  options: [
    // TODO: swap_token
    //     {
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
    // TODO: add_liquidity
    {
      ...FURUCOMBO_FEATURES.remove_liquidity,
      type: FURUCOMBO_TYPES.FURUCOMBO_TRADING_PARS,
      inputOptions: [
        { token: "AAVE/ETH", AAVE: 4.7856, ETH: 0.32176 },
        { token: "AKRO/ETH", AKRO: 1107.06757, ETH: 0.00495 },
        { token: "ALBT/ETH", ALBT: 234.96691, ETH: 0.01495 },
        { token: "ALPHA/ETH", ALPHA: 240.5421, ETH: 0.02865 },
        { token: "BAC/DAI", BAC: 9.3911, DAI: 0.13758 },
        { token: "BAL/ETH", BAL: 26.62399, ETH: 0.13378 },
        { token: "BAND/ETH", BAND: 45.13827, ETH: 0.0656 },
        { token: "BAT/ETH", BAT: 81.17102, ETH: 0.02166 },
        { token: "BID/ETH", BID: 1115.43089, ETH: 0.00321 },
      ],
    },
  ],
};

export const Aave = {
  title: "Aave V2",
  defiName: "aavev2",
  colors: { from: "#b6509e", to: "#2ebac6" },
  options: [
    {
      ...FURUCOMBO_FEATURES.deposit,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        { token: "AAVE", aAAVE: 1 },
        { token: "AMPL", aAMPL: 1 },
        { token: "BAL", aBAL: 1 },
        { token: "BAT", aBAT: 1 },
        { token: "BUSD", aBUSD: 1 },
        { token: "CRV", aCRV: 1 },
        { token: "DAI", aDAI: 1 },
        { token: "DPI", aDPI: 1 },
        { token: "ENJ", aENJ: 1 },
        { token: "ENS", aENS: 1 },
        { token: "ETH", aWETH: 1 },
        { token: "FEI", aFEI: 1 },
        { token: "FRAX", aFRAX: 1 },
        { token: "GUSD", aGUSD: 1 },
        { token: "KNCL", aKNCL: 1 },
        { token: "LINK", aLINK: 1 },
        { token: "SNX", aSNX: 1 },
        { token: "USDC", aUSDC: 1 },
        { token: "USDT", aUSDT: 1 },
        { token: "WBTC", aWBTC: 1 },
        { token: "xSUSHI", aXSUSHI: 1 },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.withdraw,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        { AAVE: 1, token: "aAAVE" },
        { AMPL: 1, token: "aAMPL" },
        { BAL: 1, token: "aBAL" },
        { BAT: 1, token: "aBAT" },
        { BUSD: 1, token: "aBUSD" },
        { CRV: 1, token: "aCRV" },
        { DAI: 1, token: "aDAI" },
        { DPI: 1, token: "aDPI" },
        { ENJ: 1, token: "aENJ" },
        { ENS: 1, token: "aENS" },
        { ETH: 1, token: "aWETH" },
        { FEI: 1, token: "aFEI" },
        { FRAX: 1, token: "aFRAX" },
        { GUSD: 1, token: "aGUSD" },
        { KNCL: 1, token: "aKNCL" },
        { LINK: 1, token: "aLINK" },
        { SNX: 1, token: "aSNX" },
        { USDC: 1, token: "aUSDC" },
        { USDT: 1, token: "aUSDT" },
        { WBTC: 1, token: "aWBTC" },
        { xSUSHI: 1, token: "aXSUSHI" },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.borrow,
      type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
      tokens: FURUCOMBO_AAVE_TOKENS,
    },
    {
      ...FURUCOMBO_FEATURES.repay,
      type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
      tokens: FURUCOMBO_AAVE_TOKENS,
    },
    {
      ...FURUCOMBO_FEATURES.flashloan,
      type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
      tokens: FURUCOMBO_AAVE_TOKENS,
    },
  ],
};

export const Sushiswap = {
  title: "Sushiswap",
  defiName: "sushiswap",
  colors: { from: "#d44588", to: "#27b0e6" },
  options: [
    // TODO: add swap_token
    // TODO: add add_liquidity
    {
      ...FURUCOMBO_FEATURES.remove_liquidity,
      type: FURUCOMBO_TYPES.FURUCOMBO_TRADING_PARS,
      inputOptions: [
        { token: "AAVE/ETH", AAVE: 4.41793, ETH: 0.28086 },
        { token: "BFC/ETH", BFC: 146.88959, ETH: 0.00749 },
        { token: "BIT/ETH", BIT: 51.61937, ETH: 0.02024 },
        { token: "COMP/ETH", COMP: 6.63721, ETH: 0.30084 },
        { token: "CVX/ETH", CVX: 13.55407, ETH: 0.1183 },
        { token: "DAI/ETH", DAI: 81.58085, ETH: 0.02473 },
        { token: "EDEN/ETH", EDEN: 95.9782, ETH: 0.01158 },
        { token: "ETH/ALCX", ETH: 0.20234, ALCX: 5.7896 },
      ],
    },
  ],
};

export const Curve = {
  title: "Curve",
  defiName: "curve",
  colors: { from: "#000FFF", to: "#3465A4" },
  options: [
    // TODO: add swap_usd
    // TODO: add swap_btc
    // TODO: add swap_eth
    // TODO: add swap_crypto
    // TODO: add swap_other
    {
      ...FURUCOMBO_FEATURES.add_liquidity,
      type: FURUCOMBO_TYPES.FURUCOMBO_MULTIPLE_INPUTS,
      outputsOptions: [
        {
          token: "3Crv",
          DAI: 0.96991,
          USDC: 0.96992,
          USDT: 0.96992,
        },
        {
          token: "3EURpool-f",
          agEUR: 0.98758,
          EURT: 0.99011,
          EURS: 0.9868,
        },
        {
          token: "BUSD3CRV-f",
          BUSD: 0.98476,
          DAI: 0.9847,
          USDC: 0.98471,
          USDT: 0.98524,
        },
        {
          token: "D3-f",
          FRAX: 0.98926,
          FEI: 0.98843,
          alUSD: 0.98755,
        },
        {
          token: "EURT-f",
          EURT: 0.98855,
          sEUR: 0.98388,
        },
        {
          token: "FRAX3CRV-f",
          FRAX: 0.98258,
          DAI: 0.98266,
          USDC: 0.98267,
          USDT: 0.9832,
        },
        {
          token: "LUSD3CRV-f",
          LUSD: 0.97984,
          DAI: 0.97665,
          USDC: 0.97666,
          USDT: 0.97719,
        },
        {
          token: "LinkUSD3CRV",
          LINKUSD: 0.99321,
          DAI: 0.96698,
          USDC: 0.96699,
          USDT: 0.96752,
        },
      ],
    },
    // TODO: add remove_liquidity
    {
      ...FURUCOMBO_FEATURES.stake_token,
      type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
      tokens: [
        "3Crv",
        "3EURpool-f",
        "BUSD3CRV-f",
        "D3-f",
        "EURT-f",
        "FRAX3CRV-f",
        "LUSD3CRV-f",
        "MIM-3LP3CRV-f",
        "MIM-UST-f",
        "OUSD3CRV-f",
        "TUSD3CRV-f",
        "a3CRV",
        "alUSD3CRV-f",
        "ankrCRV",
        "bCRV",
        "bbtcCRV",
        "cCRV",
        "crv3crypto",
        "crvCRVETH",
        "crvCVXETH",
        "crvEURSUSDC",
        "crvEURTUSD",
        "cvxcrv-f",
        "dusd3CRV",
        "eCRV",
        "eursCRV",
        "gusd3CRV",
        "hbtcCRV",
        "husd3CRV",
        "ib3CRV",
        "ibbtc-sbtcCRV-f",
        "linkCRV",
        "musd3CRV",
        "obtcCRV",
        "pbtcCRV",
        "rCRV",
        "renCRV",
        "rsv3 CRV",
        "sCRV",
        "sacRV",
        "sbtcCRV",
        "steCRV",
        "tbtcCRV",
        "usdk3CRV",
        "usdn3CRV",
        "usdp3CRV",
        "usdtCRV",
        "ust3CRV",
        "yCRV",
        "ypaxCrv",
      ],
    },
    {
      ...FURUCOMBO_FEATURES.claim_crv,
      type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
      token: "CRV",
    },
  ],
};

export const Yearn = {
  title: "Yearn",
  defiName: "yearn",
  colors: { from: "#0854a2", to: "#0075fc" },
  options: [
    {
      ...FURUCOMBO_FEATURES.depositVault,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        { token: "1INCH", yv1INCH: 0.93503 },
        { token: "3Crv", "yvCurve-3pool": 0.96644 },
        { token: "AAVE", yvAAVE: 0.96945 },
        { token: "BUSD3CRV-f", "yvCurve-BUSD": 0.94508 },
        { token: "COMP", yvCOMP: 0.98796 },
        { token: "DAI", yvDAI: 0.97222 },
        { token: "EURT-f", "yvCurve-EURT": 0.90447 },
        { token: "FRAX3CRV-f", "yvCurve-FRAX": 0.90141 },
      ],
    },
    //  TODO: withdraw
  ],
};

export const Compound = {
  title: "Compound",
  defiName: "compound",
  colors: { from: "#2E9F9A", to: "#00D395" },
  options: [
    {
      ...FURUCOMBO_FEATURES.supply,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        { token: "AAVE", cAAVE: 49.70315 },
        { token: "BAT", cBAT: 48.38187 },
        { token: "COMP", cCOMP: 49.03409 },
        { token: "DAI", cDAI: 45.48241 },
        { token: "ETH", cETH: 49.84382 },
        { token: "LINK", cLINK: 49.68571 },
        { token: "MKR", cMKR: 49.95552 },
        { token: "SUSHI", cSUSHI: 48.97074 },
        { token: "TUSD", cTUSD: 48.90257 },
        { token: "UNI", cUNI: 49.36804 },
        { token: "USDC", cUSDC: 44.25711 },
        { token: "USDT", cUSDT: 45.81922 },
        { token: "WBTC", cWBTC: 49.83819 },
        { token: "YFI", cYFI: 49.48488 },
        { token: "ZRX", cZRX: 48.59462 },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.withdraw,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        {
          token: "cAAVE",
          AAVE: 0.02011,
        },
        {
          token: "cBAT",
          BAT: 0.02066,
        },
        {
          token: "cCOMP",
          COMP: 0.02039,
        },
        {
          token: "cDAI",
          DAI: 0.02198,
        },
        {
          token: "cETH",
          ETH: 0.02006,
        },
        {
          token: "cLINK",
          LINK: 0.02012,
        },
        {
          token: "cMKR",
          MKR: 0.02001,
        },
        {
          token: "cSUSHI",
          SUSHI: 0.02042,
        },
        {
          token: "cTUSD",
          TUSD: 0.02044,
        },
        {
          token: "cUNI",
          UNI: 0.02025,
        },
        {
          token: "cUSDC",
          USDC: 0.02259,
        },
        {
          token: "cUSDT",
          USDT: 0.02182,
        },

        {
          token: "cWBTC-Legacy",
          WBTC: 0.0202,
        },
        {
          token: "cYFI",
          YFI: 0.0202,
        },
        {
          token: "cZRX",
          ZRX: 0.02057,
        },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.repay,
      type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
      tokens: [
        "AAVE",
        "BAT",
        "COMP",
        "DAI",
        "ETH",
        "LINK",
        "MKR",
        "SUSHI",
        "TUSD",
        "UNI",
        "USDC",
        "USDT",
        "WBTC",
        "YFI",
        "ZRX",
      ],
    },
    {
      ...FURUCOMBO_FEATURES.collect_comp,
      type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
      token: "COMP",
    },
  ],
};

export const Maker = {
  title: "Maker",
  defiName: "maker",
  colors: { from: "#6ACCB9", to: "#1AAB9B" },
  options: [
    {
      ...FURUCOMBO_FEATURES.new_vault,
      type: FURUCOMBO_TYPES.FURUCOMBO_NEW_VAULT,
      assets: NEW_VAULT_ASSETS,
    },
    {
      ...FURUCOMBO_FEATURES.deposit,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.ETH,
      transactionType: "input",
    },
    {
      ...FURUCOMBO_FEATURES.withdraw,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.ETH,
      transactionType: "output",
    },
    {
      ...FURUCOMBO_FEATURES.generate,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.DAI,
      transactionType: "output",
    },
    {
      ...FURUCOMBO_FEATURES.pay_back,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.DAI,
      transactionType: "input",
    },
  ],
};

export const OneInch = {
  title: "1inch",
  defiName: "oneinch",
  colors: { from: "#5c5d62", to: "#9e9fa6" },
  // options: [
  // TODO: add swap_token
  // ],
};

export const Paraswap = {
  title: "Paraswap",
  defiName: "paraswap",
  colors: { from: "#5c5d62", to: "#9e9fa6" },
  // options: [
  // TODO: add swap_token
  // ],
};

export const UniswapV3 = {
  title: "Uniswap V3",
  defiName: "uniswapv3",
  colors: { from: "#5c5d62", to: "#9e9fa6" },
  // options: [
  // TODO: add swap_token
  // ],
};

export const Bprotocol = {
  title: "B‧Protocol",
  defiName: "bprotocol",
  colors: { from: "#20AA5A", to: "#00C45C" },
  options: [
    {
      ...FURUCOMBO_FEATURES.new_vault,
      type: FURUCOMBO_TYPES.FURUCOMBO_NEW_VAULT,
      assets: NEW_VAULT_ETH_ASSETS,
    },
    {
      ...FURUCOMBO_FEATURES.deposit,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.ETH,
      transactionType: "input",
    },
    {
      ...FURUCOMBO_FEATURES.withdraw,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.ETH,
      transactionType: "output",
    },
    {
      ...FURUCOMBO_FEATURES.generate,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.DAI,
      transactionType: "output",
    },
    {
      ...FURUCOMBO_FEATURES.pay_back,
      type: FURUCOMBO_TYPES.FURUCOMBO_VAULT,
      token: TOKENS_SYMBOLS.DAI,
      transactionType: "input",
    },
  ],
};

export const Synthetix = {
  title: "Synthetix",
  defiName: "synthetix",
  colors: { from: "#00A5DD", to: "#00D1FF" },

  options: [
    {
      ...FURUCOMBO_FEATURES.stake_token,
      type: FURUCOMBO_TYPES.FURUCOMBO_POOL,
      poolType: "input",
      pools: [
        { pool: "Curve Pool sUSD", token: "sCRV" },
        { pool: "Curve Pool sEUR", token: "eursCRV" },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.claim_rewards,
      type: FURUCOMBO_TYPES.FURUCOMBO_POOL,
      poolType: "output",
      pools: [
        { pool: "Curve Pool sUSD", token: "SNX" },
        { pool: "Curve Pool sEUR", token: "SNX" },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.unstake_token,
      type: FURUCOMBO_TYPES.FURUCOMBO_POOL,
      poolType: "output",
      pools: [
        { pool: "Curve Pool sUSD", token: "sCRV" },
        { pool: "Curve Pool sEUR", token: "eursCRV" },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.claim_and_unstake,
      type: FURUCOMBO_TYPES.FURUCOMBO_POOL,
      poolType: "output",
      pools: [
        { pool: "Curve Pool sUSD", tokens: ["sCRV", "SNX"] },
        { pool: "Curve Pool sEUR", tokens: ["eursCRV", "SNX"] },
      ],
    },
  ],
};

export const Utility = {
  title: "Utility",
  defiName: "utility",
  colors: { from: "#5c5d62", to: "#9e9fa6" },
  options: [
    {
      ...FURUCOMBO_FEATURES.send_token,
      type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
      tokens: FURUCOMBO_UTILITY_TOKENS,
    },
    {
      ...FURUCOMBO_FEATURES.weth,
      type: FURUCOMBO_TYPES.FURUCOMBO_SWAP,
      inputOptions: [
        {
          token: "ETH",
          WETH: 1,
        },
      ],
    },
    {
      ...FURUCOMBO_FEATURES.add_funds,
      type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
      tokens: FURUCOMBO_UTILITY_TOKENS,
    },
    {
      ...FURUCOMBO_FEATURES.return_funds,

      type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
      tokens: FURUCOMBO_UTILITY_TOKENS,
    },
    {
      ...FURUCOMBO_FEATURES.gas_saver,
      type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
      tokens: ["CHI", "GST2"],
    },
    {
      ...FURUCOMBO_FEATURES.token_bridge,
      type: FURUCOMBO_TYPES.FURUCOMBO_BRIGDE,
      network: "Polygon",
      tokens: [
        "1INCH",
        "AAVE",
        "ADX",
        "AKRO",
        "ALBT",
        "ALCX",
        "ALEPH",
        "BAC",
        "BADGER",
        "BAL",
        "BAND",
        "BAT",
        "BID",
        "BNT",
        "BOND",
        "BTC2x-FLI",
        "BUSD",
        "BZRX",
        "CEL",
        "CGT",
        "CHAI",
        "CHAIN",
        "COMBO",
        "COMP",
        "CORE",
        "CREAM",
        "CRV",
        "DAI",
        "DEFI+L",
        "DEFI+S",
        "DEFI5",
        "DHT",
        "DOUGH",
        "DPI",
        "EDEN",
        "ENJ",
        "ETH",
        "ETH2x-FLI",
        "EURS",
        "FARM",
        "FOAM",
        "FRAX",
      ],
    },
  ],
};
