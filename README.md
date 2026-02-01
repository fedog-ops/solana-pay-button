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

> This package is a **React UI component library** for Solana payments.
> It is *not* a replacement for the official `@solana/pay` SDK,
> but provides ready‑to‑use components and wallet integration.

