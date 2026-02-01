import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const createTransferTx = (
  from: PublicKey,
  to: PublicKey,
  lamports: number
): Transaction =>
  new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports,
    })
  );

export type PayButtonProps = {
  recipient: string;
  amountSol: number;
  endpoint?: string;
};

export const PayButton: React.FC<PayButtonProps> = ({
  recipient,
  amountSol,
  endpoint = "https://api.devnet.solana.com",
}) => {
  const { publicKey, sendTransaction } = useWallet();

  const onPay = async () => {
    if (!publicKey) {
      alert("Connect wallet first");
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

  return <button onClick={onPay}>Pay {amountSol} SOL</button>;
};
