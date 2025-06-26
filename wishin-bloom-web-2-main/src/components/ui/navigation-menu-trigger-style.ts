import { cva } from "class-variance-authority";

export const navigationMenuTriggerStyle = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
