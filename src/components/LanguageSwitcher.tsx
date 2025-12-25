import Link from 'next/link';
import React from 'react';

interface LanguageSwitcherProps {
    currentLocale: string;
    availableLocales: string[];
    defaultLocale: string;
    /** Map of locale code -> full URL path for that locale (e.g., { "cs": "/cs/kontakt", "en": "/en/contact" }) */
    alternateUrls?: Record<string, string>;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    currentLocale,
    availableLocales,
    defaultLocale,
    alternateUrls = {}
}) => {
    // Get URL for a target locale
    const getUrlForLocale = (targetLocale: string): string => {
        // 1. Check if we have a pre-computed alternate URL (with translated slug)
        if (alternateUrls[targetLocale]) {
            return alternateUrls[targetLocale];
        }

        // 2. Fallback: If it's the default language, go to root
        if (targetLocale === defaultLocale) {
            return '/';
        }

        // 3. Otherwise just use the locale prefix (homepage for that language)
        return `/${targetLocale}`;
    };

    return (
        <div className="flex gap-4">
            {availableLocales.map((locale) => (
                <Link
                    key={locale}
                    href={getUrlForLocale(locale)}
                    className={`uppercase font-bold ${locale === currentLocale
                        ? 'text-indigo-600 underline'
                        : 'text-gray-500 hover:text-indigo-400'
                        }`}
                >
                    {locale}
                </Link>
            ))}
        </div>
    );
};
