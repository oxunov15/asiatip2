'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useLanguageRedirect(defaultLocale = 'uz') {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathLocale = pathname.split('/')[1];
    const allowedLocales = ['uz', 'ru', 'en', 'tr', 'kk'];
    if (!allowedLocales.includes(pathLocale)) {
      router.replace(`/${defaultLocale}${pathname}`);
    }
  }, [pathname]);
}
