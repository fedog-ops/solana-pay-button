import React from 'react';

type PayButtonProps = {
    recipient: string;
    amountSol: number;
    endpoint?: string;
    onError?: (error: string) => void;
};
declare const PayButton: React.FC<PayButtonProps>;

export { PayButton, type PayButtonProps };
