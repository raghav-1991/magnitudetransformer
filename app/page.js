import SiteShell from "@/components/mt/SiteShell"
import Hero from "@/components/mt/Hero"
import {
    HeroFeatures, StandardsStrip, AboutBlock, ProductsBento, CtaBlock, GalleryBlock,
    ProductRange, Stats, WhyChoose, Team, FaqBlock, BigMarquee,
} from "@/components/mt/sections"

export const metadata = {
    title: "Magnitude Transformers | Highly Stable Transformers, Handcrafted to Perfection",
    description: "ISO 9001:2015 certified manufacturer of ISI-marked, BEE star-rated power and distribution transformers from 25 kVA to 5 MVA in Peenya, Bangalore.",
}

export default function Home() {
    return (
        <SiteShell>
            <Hero />
            <HeroFeatures />
            <div style={{ height: 80 }} />
            <StandardsStrip />
            <AboutBlock />
            <ProductsBento />
            <CtaBlock />
            <GalleryBlock />
            <ProductRange />
            <Stats />
            <BigMarquee />
            <WhyChoose />
            <Team />
            <FaqBlock />
        </SiteShell>
    )
}
