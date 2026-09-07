import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Rizwan Syed | IT Security Administrator',
        template: '%s | Rizwan Syed',
    },
    description:
        'IT Security Administrator with 4+ years of enterprise IT experience across cybersecurity, networks, servers, virtualization, databases, and infrastructure automation.',
    keywords: [
        'Rizwan Syed',
        'Infrastructure Engineer',
        'Network Administrator',
        'IT Security Administrator',
        'Windows Server',
        'Active Directory',
        'VMware',
        'Veeam',
        'Palo Alto',
        'Dell SONiC',
        'Microsoft 365',
        'Azure',
        'AWS',
        'SQL Server',
        'PowerShell',
        'Automation',
    ],
    authors: [{ name: 'Rizwan Syed', url: 'https://linkedin.com/in/rizwan-syed-79b798211' }],
    creator: 'Rizwan Syed',
    metadataBase: new URL('https://rizwansyed.dev'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rizwansyed.dev',
        title: 'Rizwan Syed | IT Security Administrator',
        description:
            'Cybersecurity • Networks • Infrastructure • Automation • Cloud — 4+ years across enterprise IT, with internal tooling backed by SQL Server.',
        siteName: 'Rizwan Syed',
        images: [
            {
                        url: '/about/rizwan.jpg',
                width: 1200,
                height: 630,
                alt: 'Rizwan Syed — IT Security Administrator',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rizwan Syed | IT Security Administrator',
        description:
            'Cybersecurity • Networks • Infrastructure • Automation • Cloud — 4+ years across enterprise IT.',
        images: ['/about/rizwan.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/RS_light.svg', media: '(prefers-color-scheme: light)' },
            { url: '/RS_dark.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
