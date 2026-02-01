# Solana Pay Button

A minimal React PayButton for sending SOL.

If you're looking for a simple way to accept SOL payments in a React or Next.js app:

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
