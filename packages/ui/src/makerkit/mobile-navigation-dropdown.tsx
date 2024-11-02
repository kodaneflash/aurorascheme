'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { Button } from '../shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu';
import { Trans } from './trans';
import { If } from './if';
import { SubMenuModeToggle } from './mode-toggle';

function MobileNavigationDropdown({
  links,
  features,
}: {
  links: {
    path: string;
    label: string;
  }[];
  features: {
    enableThemeToggle: boolean;
  };
}) {
  const path = usePathname();

  const currentPathName = useMemo(() => {
    return Object.values(links).find((link) => link.path === path)?.label;
  }, [links, path]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'} className={'w-full'}>
          <span
            className={'flex w-full items-center justify-between space-x-2'}
          >
            <span>
              <Trans i18nKey={currentPathName} defaults={currentPathName} />
            </span>
            <ChevronDown className={'h-5'} />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={
          'dark:divide-dark-700 w-screen divide-y divide-gray-100 rounded-none'
        }
      >
        {Object.values(links).map((link) => (
          <DropdownMenuItem asChild key={link.path}>
            <Link
              className={'flex h-12 w-full items-center'}
              href={link.path}
            >
              <Trans i18nKey={link.label} defaults={link.label} />
            </Link>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <If condition={features.enableThemeToggle}>
          <SubMenuModeToggle />
        </If>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNavigationDropdown;
