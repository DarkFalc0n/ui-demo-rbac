'use client';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { sideNavRoutes as navRoutes } from '@/lib/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks';

const SideNav = () => {
  const pathname = usePathname();
  const currentRoute = pathname.split('/')[2];

  console.log(currentRoute);
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl bg-zinc-100 p-4 shadow-xl">
      {navRoutes.map((route, index) => (
        <Link href={`/dashboard/${route.name.toLowerCase()}`} key={index}>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger>
                <div className="group rounded-full p-3 transition-all duration-300 hover:bg-slate-200">
                  <route.icon
                    className={cn('size-6 group-hover:text-sky-600', {
                      'text-sky-500': route.name.toLowerCase() === currentRoute
                    })}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white"
              >
                <p>{route.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      ))}
      <img
        src={'https://api.dicebear.com/9.x/big-ears/svg?scale=200&seed=admin'}
        alt="Av"
        className="mt-auto size-12 self-center rounded-full"
      />
    </div>
  );
};

export default SideNav;
