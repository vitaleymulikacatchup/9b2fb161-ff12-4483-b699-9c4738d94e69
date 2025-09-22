"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Hub"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How To Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Buy MemeCoin"
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MemeCoin Hub"
          subtitle="The Future of Fun Cryptocurrency"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="Get to Know Us"
          descriptions={[
            "MemeCoin is your fun entry into the world of cryptocurrency.",
            "Join our community on Discord and Twitter!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Understanding the finances behind MemeCoin."
          kpiItems={[
            { value: "100M", description: "Total Supply", longDescription: "Total number of tokens available.", icon: LucideIcon }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin Hub"
          columns={[
            { items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} }
            ] },
            { items: [
              { label: "How To Buy", onClick: () => {} },
              { label: "Tokenomics", onClick: () => {} }
            ] },
            { items: [
              { label: "Contact", onClick: () => {} },
              { label: "Privacy Policy", onClick: () => {} }
            ] }
          ]}
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
