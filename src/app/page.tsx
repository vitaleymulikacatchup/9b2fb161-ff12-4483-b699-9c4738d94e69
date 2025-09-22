"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={30}
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'FAQ', id: 'faq' }, { name: 'Footer', id: 'footer' }]}
          buttonText="Buy MemeMint"
          onButtonClick={() => console.log('Buy MemeMint clicked')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Hey there"
          subtitle="Your gateway to playful digital assets"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemeMint is a playful, innovative platform that allows users to create, trade, and enjoy meme-themed digital assets, fostering creativity and community engagement."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MemeMint"
          steps={[
            { title: 'Step 1', description: 'Create an account on MemeMint.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Connect your wallet.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Purchase your first meme!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="MemeMint Tokenomics"
          description="Explore our transparent and fair tokenomics that benefit the community."
          kpiItems={[
            { value: '1,000,000', description: 'Total Supply' },
            { value: '50%', description: 'Community Allocation' },
            { value: '1%', description: 'Transaction Fee' }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: 'What is MemeMint?', content: 'MemeMint is a platform for meme enthusiasts to create, share, and trade digital assets.' },
            { title: 'How do I buy MemeMint tokens?', content: 'You can purchase MemeMint tokens through our platform by connecting your wallet.' },
            { title: 'Is there a community?', content: 'Absolutely! We have a vibrant community of meme lovers and creators.' },
            { title: 'What are the fees involved?', content: 'We charge a small transaction fee of 1% on each trade.' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="MemeMint Logo"
          logoText="MemeMint"
          items={[
            { label: 'Privacy Policy', onClick: () => console.log('Privacy Policy') },
            { label: 'Terms of Service', onClick: () => console.log('Terms of Service') },
            { label: 'Contact', onClick: () => console.log('Contact') }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}