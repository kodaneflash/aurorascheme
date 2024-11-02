import { forwardRef } from 'react';

import { Slot, Slottable } from '@radix-ui/react-slot';

import { cn } from '../../utils';


export const Pill = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    label?: string;
    asChild?: boolean;
  }
>(function PillComponent({ className, asChild, ...props }, ref) {
  const Comp = asChild ? Slot : 'h3';

  return (
    <Comp
      ref={ref}
      className={cn(
        'flex items-center space-x-2 text-center text-sm text-gray-700 dark:text-gray-200',
        className,
      )}
      {...props}
    >
      {props.label && (
        <span
          className={
            'rounded-2xl bg-primary px-2.5 py-1.5 text-sm font-semibold text-primary-foreground'
          }
        >
          {props.label}
        </span>
      )}
      <Slottable>{props.children}</Slottable>
    </Comp>
  );
});
