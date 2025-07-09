export interface UserProfile {
  name: string;
  email: string;
  kycStatus: 'Verified' | 'Pending' | 'Rejected';
  memberSince: string;
  goldBalance: number;
  accountValue: number;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'Buy' | 'Sell';
  amountINR: number;
  amountGold: number;
  status: 'Completed' | 'Pending' | 'Failed';
  pricePerGram: number;
}

export interface PaymentMethod {
  id: string;
  type: 'Bank Account' | 'UPI' | 'Wallet';
  provider: string;
  details: string;
  isPrimary: boolean;
}
