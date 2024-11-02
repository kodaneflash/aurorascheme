import { cn } from '@kit/ui/utils';

export function SitePageHeader(props: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={cn('border-b py-8 xl:py-10 2xl:py-12 w-full', props.className)}>
      <div className={'container mx-auto flex flex-col items-center text-center space-y-2 lg:space-y-4 w-full max-w-4xl px-4'}>
        <h1 className={'font-base font-heading text-3xl xl:text-5xl'}>
          {props.title}
        </h1>

        <h2 className={'text-lg text-muted-foreground 2xl:text-2xl'}>
          {props.subtitle}
        </h2>
      </div>
    </div>
  );
}