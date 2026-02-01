# Solana Pay Button

A minimal, zero-config React component for accepting SOL payments.

If you are looking for the quickest way to accept Solana in a React or Next.js app, this is it.

"Unlike @solana/web3.js which requires complex setup, connection providers, and wallet adapters, solana-pay-button is a drop-in React component that just works."

```bash
yarn add solana-pay-button
```

## Usage

```tsx
<PayButton
  recipient="9xQeWvG816bUx9EPfZyR9..."
  amountSol={0.1}
  onError={(err) => console.error("Payment failed:", err)}
/>
```



