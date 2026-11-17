import { cn } from '@/lib/utils';

interface WaveDividerProps {
  variant?: 'bottom' | 'top';
  className?: string;
}

export function WaveDivider({ variant = 'bottom', className }: WaveDividerProps) {
  return (
    <div className={cn('w-full overflow-hidden leading-none', className)} aria-hidden="true">
      <svg
        className="relative block h-10 w-full sm:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        {variant === 'bottom' ? (
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        ) : (
          <path d="M0,0 C300,90 600,-40 850,50 C1050,110 1150,40 1200,80 L1200,120 L0,120 Z" />
        )}
      </svg>
    </div>
  );
}
