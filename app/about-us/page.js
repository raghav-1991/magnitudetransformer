import SiteShell from "@/components/mt/SiteShell"
import { PageHero, AboutBlock, SectionHead, ProductRange, CtaBlock, Team, Stats, StandardsStrip } from "@/components/mt/sections"
import { Reveal, SpotlightCard, Backdrop } from "@/components/mt/effects"
import { PIC } from "@/lib/site"

export const metadata = { title: "About Us" }

const foundation = [
    ["fa-eye", "Our Vision", "To set new benchmarks in manufacturing power and distribution transformers and allied products for domestic and international markets."],
    ["fa-bullseye", "Our Mission", "To maintain a strong R&D base that supports manufacturing, quality control and testing, led by engineers who care about quality and detail."],
    ["fa-clipboard-check", "Quality Assurance", "Quality checks start at raw material identification, followed by regular inspection, testing and validation before every delivery."],
    ["fa-flask-vial", "Testing Facilities", "Routine and special tests, including a 100 Hz generator for DVDF testing, capacitor bank for load loss and heat run tests up to 5 MVA."],
    ["fa-microchip", "Technical Capability", "Our design engineers create custom transformer designs for complex projects using advanced engineering software."],
    ["fa-earth-asia", "Global Standards", "Products designed to meet or exceed IS, CBIP, REC, BS, NEMA, IEC and ANSI standards."],
]

export default function AboutPage() {
    return (
        <SiteShell>
            <PageHero title="About Us" image={PIC("DJI_0892-1-scaled.jpg")} text="Designing and manufacturing reliable distribution and power transformers since 2007." />
            <AboutBlock full />
            <StandardsStrip />

            <section className="mt-section mt-section--alt">
                <Backdrop aurora={false} />
                <div className="mt-container">
                    <SectionHead center eyebrow="Our Foundation" icon="fa-building-columns"
                        title={<>Vision, mission and the <span className="mt-grad-text">standards we build to.</span></>}
                        text="A strong R&D base, rigorous quality control and a customer-first approach guide everything we design and manufacture." />
                    <div className="mt-grid mt-grid-3">
                        {foundation.map(([icon, t, d], k) => (
                            <Reveal key={t} delay={(k % 3) * 0.1}>
                                <SpotlightCard style={{ height: "100%" }}>
                                    <span className="mt-card__num">0{k + 1}</span>
                                    <div className="mt-icon"><i className={`fas ${icon}`} /></div>
                                    <h3>{t}</h3><p>{d}</p>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <ProductRange />
            <Stats />
            <CtaBlock title={<>MAGIC: one point of contact for <span className="mt-grad-text">complete energy solutions.</span></>} quote={null}
                text="From transformers and switchgear to cables, concrete poles, installation and commissioning, we deliver end-to-end power infrastructure with a single point of contact."
                btn={["Talk to Our Team", "/contact-us"]} icon="fa-wand-magic-sparkles" />
            <Team />
        </SiteShell>
    )
}
