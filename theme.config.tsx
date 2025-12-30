import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';
import logo from './public/logo.webp';
import Footer from './components/Footer';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();

    const title = asPath === '/' ? 'Blue0x - Together. We Are the Bank.' : 'Blue0x - %s';

    return {
      titleTemplate: title,
      description: 'Open-sourced. Decentralized. Secure',
      canonical: 'https://blue0x.com',
      openGraph: {
        url: 'https://blue0x.com',
        title: 'Blue0x - Together.  We Are the Bank.',
        description: 'Open-sourced. Decentralized. Secure.',
        images: [
          {
            url: 'https://blue0x.com/images/blx-og.png',
            width: 1200,
            height: 630,
            alt: 'Blue0x screenshot',
            type: 'image/png',
          },
        ],
        siteName: 'Blue0x',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@blue0x_com',
        title: 'Blue0x - Together.  We Are the Bank.',
        description: 'Open-sourced. Decentralized. Secure.',
        creator: '@blue0x_com',
        images: {
          url: 'https://blue0x.com/images/blx-og.png',
          alt: 'Blue0x Wallet',
        }
      },
    };
  },
  search: {
    placeholder: "Search documentation…",
  },
  nextThemes: {
    forcedTheme: 'dark',
  },
  logo: (
    <div className="flex items-center text-lg">
      <Image src={logo} width={32} height={33} alt="Blue0x Logo" />
    </div>
  ),
  darkMode: false,
  project: {
    link: 'https://github.com/theBlue0x',
  },
  chat: {
    link: 'https://discord.gg/cQx7jHYTPX',
  },
  docsRepositoryBase: 'https://github.com/theBlue0x/website',
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    component: <Footer />,
  },
  head: (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Open-sourced. Decentralized. Secure." />
      <meta name="twitter:title" content="Blue0x - Together. We Are the Bank." />
      <meta name="twitter:description" content="Open-sourced. Decentralized. Secure." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@blue0x_com" />
      <meta name="twitter:site" content="@blue0x_com" />
      <meta name="twitter:image" content="https://blue0x.com/images/blx-og.png" />
      <meta property="og:title" content="Blue0x - Together. We Are the Bank." />
      <meta property="og:description" content="Open-sourced. Decentralized. Secure." />
      <meta property="og:image" content="https://blue0x.com/images/blx-og.png" />
      <meta name="apple-mobile-web-app-title" content="Blue0x" />
    </>
  ),
};

export default config;
