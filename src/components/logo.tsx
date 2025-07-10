import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2 text-xl font-bold font-headline", className)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
    </svg>
    <span className="text-foreground group-data-[sidebar]/sidebar:text-sidebar-foreground">SKJ <span className="text-primary group-data-[sidebar]/sidebar:text-sidebar-primary">Jwellers</span></span>
  </div>
);
