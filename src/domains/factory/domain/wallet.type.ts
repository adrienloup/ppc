export interface Wallet {
  quantity: number;
}

export type WalletState = Record<string, Wallet>;
