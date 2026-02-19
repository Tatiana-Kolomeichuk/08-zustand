'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import css from './page.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'Page is not found',
   openGraph: {
      title: 'Not found',
      description: 'Page is not found',
      // url: '',
      siteName: 'NoteHub',
      images: [
        {
          url:  'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'Note Hub Open Graph Image',
        },
      ],
    }
};
export default function NotFound() {
    const router = useRouter();
    
    useEffect(() => {const timer= setTimeout(() => { router.push('/'); }, 3000);
        return () => clearTimeout(timer);
    }, [router]);
    return ( <div className={css.main}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>);
 }