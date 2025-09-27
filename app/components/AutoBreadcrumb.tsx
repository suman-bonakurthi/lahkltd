'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, ChevronRight } from 'lucide-react';

export default function AutoBreadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    return { label: decodeURIComponent(seg).replace(/-/g, ' '), href };
  });

  return (
    <nav className="pt-32" aria-label="Breadcrumb">
      {/* Navbarla aynı container */}
      <div className="max-w-6xl mx-auto px-4">
        <ol className="flex items-center space-x-1 text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <House size={18} className="mr-1 text-gray-600 hover:text-primary" />
            </Link>
          </li>

          {crumbs.map((crumb, idx) => (
            <li key={idx} className="flex items-center">
              <ChevronRight size={14} className="text-gray-400" />
              {idx < crumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="capitalize text-gray-700 hover:text-primary transition-colors ml-1"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="capitalize text-primary font-medium ml-1">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
