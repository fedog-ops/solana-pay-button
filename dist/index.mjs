// src/index.tsx
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction
} from "@solana/web3.js";
import { jsxs } from "react/jsx-runtime";
var createTransferTx = (from, to, lamports) => new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: from,
    toPubkey: to,
    lamports
  })
);
var PayButton = ({
  recipient,
  amountSol,
  endpoint = "https://api.devnet.solana.com",
  onError
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const onPay = async () => {
    if (!publicKey) {
      if (onError) onError("Connect wallet first");
      return;
    }
    const connection = new Connection(endpoint);
    const tx = createTransferTx(
      publicKey,
      new PublicKey(recipient),
      amountSol * 1e9
    );
    await sendTransaction(tx, connection);
  };
  return /* @__PURE__ */ jsxs("button", { onClick: onPay, children: [
    "Pay ",
    amountSol,
    " SOL"
  ] });
};
export {
  PayButton
};
