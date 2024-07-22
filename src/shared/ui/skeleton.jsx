import { cn } from "@/shared/ui/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted/20", className)} {...props} />);
}

export { Skeleton }
