import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Jason Taylor` : 'Jason Taylor | Product Manager';
    return () => { document.title = 'Jason Taylor | Platform Product Manager'; };
  }, [title]);
}
