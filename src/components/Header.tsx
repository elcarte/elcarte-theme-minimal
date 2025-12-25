import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Block } from '@elcarte/core';
import { NavigationBlock } from './NavigationBlock';

interface HeaderProps {
    locale: string;
    availableLanguages: string[];
    defaultLanguage: string;
    siteTitle?: string;
    blocks?: Block[];
    /** Map of locale code -> full URL path for that locale */
    alternateUrls?: Record<string, string>;
}

export const Header: React.FC<HeaderProps> = ({
    locale,
    availableLanguages,
    defaultLanguage,
    siteTitle = "Elcarte",
    blocks,
    alternateUrls
}) => {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="flex items-center">
                    <a href={defaultLanguage === locale ? '/' : `/${locale}`} className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        {siteTitle}
                    </a>
                </div>

                {/* Navigation & Language Switcher */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6">
                        {blocks?.map(block => {
                            if (block.type === 'nav_menu') {
                                return <NavigationBlock key={block.id} data={block.data} />;
                            }
                            return null;
                        })}
                    </div>

                    <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

                    <LanguageSwitcher
                        currentLocale={locale}
                        availableLocales={availableLanguages}
                        defaultLocale={defaultLanguage}
                        alternateUrls={alternateUrls}
                    />
                </div>
            </div>
        </header>
    );
};

