'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, BarChart, ShieldAlert } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAccountAnalysis } from '@/app/analysis/actions';

interface AnalysisResult {
    summary: string;
    riskAnalysis: string;
}

export function AIAnalysisClient() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        setLoading(true);
        setError(null);
        setResult(null);

        const response = await getAccountAnalysis();

        if (response.success && response.data) {
            setResult(response.data);
        } else {
            setError(response.error || 'An unknown error occurred.');
        }

        setLoading(false);
    };
    
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Generate Report</CardTitle>
                    <CardDescription>Click the button below to generate an AI-powered report based on your account data.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={handleAnalyze} disabled={loading} size="lg">
                        {loading ? 'Analyzing...' : <><Sparkles className="mr-2 h-5 w-5" /> Analyze My Account</>}
                    </Button>
                </CardContent>
            </Card>

            {loading && (
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-2">
                             <BarChart className="h-6 w-6 text-primary" />
                             <CardTitle>Account Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                        </CardContent>
                    </Card>
                    <Card>
                         <CardHeader className="flex flex-row items-center gap-2">
                             <ShieldAlert className="h-6 w-6 text-destructive" />
                             <CardTitle>Risk Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                    </Card>
                </div>
            )}
            
            {error && (
                <Alert variant="destructive">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle>Analysis Failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {result && (
                 <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-secondary/50">
                        <CardHeader className="flex flex-row items-center gap-2">
                             <BarChart className="h-6 w-6 text-primary" />
                             <CardTitle>Account Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground prose prose-sm dark:prose-invert">
                            <p>{result.summary}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/50">
                         <CardHeader className="flex flex-row items-center gap-2">
                             <ShieldAlert className="h-6 w-6 text-accent" />
                             <CardTitle>Risk Analysis</CardTitle>
                        </CardHeader>
                         <CardContent className="text-muted-foreground prose prose-sm dark:prose-invert">
                            <p>{result.riskAnalysis}</p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
