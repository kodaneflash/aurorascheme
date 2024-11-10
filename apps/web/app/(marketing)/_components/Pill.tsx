import { Sparkle } from 'lucide-react';

interface PillProps extends React.PropsWithChildren {
  className?: string;
}

export function Pill(props: PillProps) {
  return (
    <h2
      className={
        'flex items-center space-x-2 rounded-full px-4 py-2 text-center text-sm text-muted-foreground'
      }
    >
      <Sparkle className={'inline-block h-4 text-muted-foreground'} />
      <span>{props.children}</span>
    </h2>
  );
} 