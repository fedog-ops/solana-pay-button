"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  PayButton: () => PayButton
});
module.exports = __toCommonJS(index_exports);
var import_wallet_adapter_react = require("@solana/wallet-adapter-react");
var import_web3 = require("@solana/web3.js");
var import_jsx_runtime = require("react/jsx-runtime");
var createTransferTx = (from, to, lamports) => new import_web3.Transaction().add(
  import_web3.SystemProgram.transfer({
    fromPubkey: from,
    toPubkey: to,
    lamports
  })
);
var PayButton = ({
  recipient,
  amountSol,
  endpoint = "https://api.devnet.solana.com"
}) => {
  const { publicKey, sendTransaction } = (0, import_wallet_adapter_react.useWallet)();
  const onPay = async () => {
    if (!publicKey) {
      alert("Connect wallet first");
      return;
    }
    const connection = new import_web3.Connection(endpoint);
    const tx = createTransferTx(
      publicKey,
      new import_web3.PublicKey(recipient),
      amountSol * 1e9
    );
    await sendTransaction(tx, connection);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick: onPay, children: [
    "Pay ",
    amountSol,
    " SOL"
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PayButton
});
