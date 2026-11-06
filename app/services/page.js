import SiteShell from "@/components/mt/SiteShell"
import { PageHero, SectionHead, Stats, WhyChoose, FaqBlock, CtaBlock } from "@/components/mt/sections"
import { Reveal, SpotlightCard } from "@/components/mt/effects"
import { IMG, services, company } from "@/lib/site"

export const metadata = { title: "Services" }

export default function ServicesPage() {
    return (
        <SiteShell>
            <PageHero title="Services" image={IMG("mt-panel-testing.jpg")} text="Complete transformer care, from repairs to rentals." />
            <section className="mt-section">
                <div className="mt-container">
                    <SectionHead center eyebrow="What We Do" icon="fa-screwdriver-wrench"
                        title={<>Complete transformer care, <span className="mt-grad-text">from repairs to rentals.</span></>}
                        text="Our dedicated service and maintenance department keeps your power equipment running with time-bound support, minimal downtime and expert technicians." />
                    <div className="mt-grid mt-grid-3">
                        {services.map(([icon, t, d], k) => (
                            <Reveal key={t} delay={(k % 3) * 0.1} style={{ display: "flex" }}>
                                <SpotlightCard href="/get-a-quote" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <span className="mt-card__num">0{k + 1}</span>
                                    <div className="mt-icon"><i className={`fas ${icon}`} /></div>
                                    <h3>{t}</h3>
                                    <p style={{ flex: 1 }}>{d}</p>
                                    <span className="mt-link" style={{ marginTop: 24 }}>Request Service <i className="fas fa-arrow-right" /></span>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Stats />
            <WhyChoose />
            <FaqBlock />
            <CtaBlock title="Need urgent transformer service or support?" quote={null}
                text="Call our help line for quick response on repairs, maintenance and rentals across Bangalore and Karnataka."
                btn={[`Call ${company.helpline}`, company.helplineHref]} icon="fa-headset" />
        </SiteShell>
    )
}
