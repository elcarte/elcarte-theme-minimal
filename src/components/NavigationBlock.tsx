'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    label: string;
    href: string;
}

interface NavigationBlockProps {
    data: {
        items: NavItem[];
    };
    locale?: string;
    defaultLocale?: string;
}

export const NavigationBlock: React.FC<NavigationBlockProps> = ({ data }) => {
    const pathname = usePathname();

    console.log('NavBlock data:', JSON.stringify(data));

    if (!data?.items) return null;

    return (
        <nav className="flex gap-6 items-center">
            {data.items.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={index}
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-black ${isActive ? 'text-black font-semibold' : 'text-gray-600'
                            }`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};
