'use server';

/**
 * @fileOverview A GenAI-powered account summary and risk analysis flow.
 *
 * - accountSummaryAnalysis - A function that provides a summary of account information and risk analysis.
 * - AccountSummaryAnalysisInput - The input type for the accountSummaryAnalysis function.
 * - AccountSummaryAnalysisOutput - The return type for the accountSummaryAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AccountSummaryAnalysisInputSchema = z.object({
  transactionHistory: z
    .string()
    .describe('A detailed chronological list of all transactions.'),
  kycVerificationStatus: z
    .string()
    .describe('The KYC verification status of the user.'),
  paymentMethods: z.string().describe('The payment methods of the user.'),
  personalDetails: z.string().describe('The personal details of the user.'),
});
export type AccountSummaryAnalysisInput = z.infer<typeof AccountSummaryAnalysisInputSchema>;

const AccountSummaryAnalysisOutputSchema = z.object({
  summary: z.string().describe('A summary of the account information.'),
  riskAnalysis: z.string().describe('A risk analysis of the account.'),
});
export type AccountSummaryAnalysisOutput = z.infer<typeof AccountSummaryAnalysisOutputSchema>;

export async function accountSummaryAnalysis(
  input: AccountSummaryAnalysisInput
): Promise<AccountSummaryAnalysisOutput> {
  return accountSummaryAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'accountSummaryAnalysisPrompt',
  input: {schema: AccountSummaryAnalysisInputSchema},
  output: {schema: AccountSummaryAnalysisOutputSchema},
  prompt: `You are an AI assistant that provides a summary of account information and risk analysis based on the given data.

  Summarize the account information based on the following data:
  Transaction History: {{{transactionHistory}}}
  KYC Verification Status: {{{kycVerificationStatus}}}
  Payment Methods: {{{paymentMethods}}}
  Personal Details: {{{personalDetails}}}

  Provide a risk analysis of the account based on the same data.
  Be concise and informative.
  `,
});

const accountSummaryAnalysisFlow = ai.defineFlow(
  {
    name: 'accountSummaryAnalysisFlow',
    inputSchema: AccountSummaryAnalysisInputSchema,
    outputSchema: AccountSummaryAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
