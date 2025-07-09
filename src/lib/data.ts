import type { UserProfile, Transaction, PaymentMethod } from './types';

export const userProfile: UserProfile = {
  name: 'Ananya Sharma',
  email: 'ananya.sharma@example.com',
  kycStatus: 'Verified',
  memberSince: '2022-08-15',
  goldBalance: 15.75, // in grams
  accountValue: 109586.25, // in INR
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'pm_1',
    type: 'Bank Account',
    provider: 'HDFC Bank',
    details: '**** **** **** 1234',
    isPrimary: true,
  },
  {
    id: 'pm_2',
    type: 'UPI',
    provider: 'Google Pay',
    details: 'ananya.sharma@okicici',
    isPrimary: false,
  },
  {
    id: 'pm_3',
    type: 'Wallet',
    provider: 'PayTM',
    details: '98****1234',
    isPrimary: false,
  },
];

export const transactions: Transaction[] = [
  {
    id: 'txn_1',
    date: '2024-05-20',
    type: 'Buy',
    amountINR: 5000,
    amountGold: 0.72,
    status: 'Completed',
    pricePerGram: 6944.44,
  },
  {
    id: 'txn_2',
    date: '2024-05-15',
    type: 'Sell',
    amountINR: 2000,
    amountGold: 0.29,
    status: 'Completed',
    pricePerGram: 6896.55,
  },
  {
    id: 'txn_3',
    date: '2024-05-01',
    type: 'Buy',
    amountINR: 10000,
    amountGold: 1.48,
    status: 'Completed',
    pricePerGram: 6756.76,
  },
  {
    id: 'txn_4',
    date: '2024-04-22',
    type: 'Buy',
    amountINR: 2500,
    amountGold: 0.37,
    status: 'Completed',
    pricePerGram: 6756.76,
  },
  {
    id: 'txn_5',
    date: '2024-04-10',
    type: 'Sell',
    amountINR: 3000,
    amountGold: 0.45,
    status: 'Completed',
    pricePerGram: 6666.67,
  },
  {
    id: 'txn_6',
    date: '2024-03-28',
    type: 'Buy',
    amountINR: 15000,
    amountGold: 2.31,
    status: 'Completed',
    pricePerGram: 6493.51,
  },
   {
    id: 'txn_7',
    date: '2024-03-15',
    type: 'Buy',
    amountINR: 99,
    amountGold: 0.015,
    status: 'Completed',
    pricePerGram: 6600.00,
  },
  {
    id: 'txn_8',
    date: '2024-03-05',
    type: 'Buy',
    amountINR: 5000,
    amountGold: 0.78,
    status: 'Pending',
    pricePerGram: 6410.26,
  },
];
