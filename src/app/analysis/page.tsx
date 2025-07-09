import { AppShell } from "@/components/app-shell";
import { AIAnalysisClient } from "@/components/analysis/ai-analysis-client";

export default function AnalysisPage() {
  return (
    <AppShell>
      <div className="w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-headline text-gray-900 dark:text-gray-100">AI Account Analysis</h1>
          <p className="text-muted-foreground">Get an intelligent summary and risk analysis of your account activity.</p>
        </header>
        <AIAnalysisClient />
      </div>
    </AppShell>
  );
}
