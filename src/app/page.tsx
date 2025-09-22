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
       navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
       buttonText="Buy MemeCoin"
       sticky={true}
       />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to MemeCoin Hub"
          subtitle="Join the meme revolution!"
          contractAddress="0x123456789...\"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About MemeCoin"
          descriptions={["MemeCoin is a community-driven token....", "Join us in making MemeCoin the most popular cryptocurrency!"]}
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
          description="Explore the financial details of MemeCoin"
          kpiItems={[
            { value: "1 Billion", description: "Total Supply", longDescription: "The maximum amount of MemeCoin available.", icon: "Coins" },
            { value: "75%", description: "Circulating Supply", longDescription: "Amount currently in distribution.", icon: "Cash" },
            { value: "10%", description: "Liquidity Pool", longDescription: "Funded to ensure trading stability.", icon: "Shield" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Logo"
          logoText="MemeCoin Hub"
          columns={[
            { items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }] },
            { items: [{ label: "How to Buy", onClick: () => {} }, { label: "Tokenomics", onClick: () => {} }] },
            { items: [{ label: "Contact", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 MemeCoin Hub"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}