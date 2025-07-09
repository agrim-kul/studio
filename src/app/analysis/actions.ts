'use server';

import { accountSummaryAnalysis } from '@/ai/flows/account-summary-analysis';
import { userProfile, transactions, paymentMethods } from '@/lib/data';

export async function getAccountAnalysis() {
  try {
    const transactionHistoryText = transactions
        .map(tx => `${tx.date}: ${tx.type} ${tx.amountGold}g for ₹${tx.amountINR} - Status: ${tx.status}`)
        .join('\n');

    const paymentMethodsText = paymentMethods
        .map(pm => `${pm.type} (${pm.provider}): ${pm.details}`)
        .join(', ');

    const personalDetailsText = `Name: ${userProfile.name}, Email: ${userProfile.email}, Member Since: ${userProfile.memberSince}`;
    
    const analysis = await accountSummaryAnalysis({
        transactionHistory: transactionHistoryText,
        kycVerificationStatus: userProfile.kycStatus,
        paymentMethods: paymentMethodsText,
        personalDetails: personalDetailsText,
    });
    
    return { success: true, data: analysis };
  } catch (error) {
    console.error("Error getting account analysis:", error);
    return { success: false, error: 'Failed to perform AI analysis.' };
  }
}
