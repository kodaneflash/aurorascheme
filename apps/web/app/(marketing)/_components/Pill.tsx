import { Sparkle } from 'lucide-react';

interface PillProps extends React.PropsWithChildren {
  className?: string;
}

export function Pill(props: PillProps) {
  return (
    <h2
      className={
        'flex items-center space-x-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 px-4 py-2 text-center text-sm text-gray-700 shadow dark:text-gray-200 dark:shadow-primary/20'
      }
    >
      <Sparkle className={'inline-block h-4 text-gray-400'} />
      <span>{props.children}</span>
    </h2>
  );
} 