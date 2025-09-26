'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, ChevronRight } from 'lucide-react';

export default function AutoBreadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null; // anasayfada hiç gösterme

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    return { label: decodeURIComponent(seg).replace(/-/g, ' '), href };
  });

  return (
    <nav className="pt-32 text-sm my-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li className="flex items-center">
          <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600">
            <House size={18} className="mr-1 text-gray-600 hover:text-[#0058EE]" />
          </Link>
        </li>

        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            <ChevronRight size={14} className="text-gray-400 mx-1" />
            {idx < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="capitalize text-gray-700 hover:text-blue-600"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="capitalize text-blue-600 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
