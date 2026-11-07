import SiteShell from "@/components/mt/SiteShell"
import { PageHero, FaqBlock } from "@/components/mt/sections"
import { Reveal, SpotlightCard, Backdrop, Meteors } from "@/components/mt/effects"
import { ContactForm } from "@/components/mt/forms"
import { PIC, company } from "@/lib/site"

export const metadata = { title: "Contact Us" }

export default function ContactPage() {
    return (
        <SiteShell>
            <PageHero title="Contact Us" image={PIC("DJI_0892-scaled.jpg")} text="Get in touch with us!" />
            <section className="mt-section">
                <Backdrop aurora={false} />
                <div className="mt-container">
                    <div className="mt-split" style={{ gridTemplateColumns: ".85fr 1.15fr", alignItems: "start" }}>
                        <Reveal variant="left">
                            <span className="mt-eyebrow"><i className="fas fa-comments" />Contact</span>
                            <h2 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "18px 0" }}>Get in touch <span className="mt-grad-text">with us!</span></h2>
                            <p style={{ marginBottom: 28 }}>Have a question about our transformers, services or a project? Call, email or visit our facility in Peenya Industrial Area, Bangalore. Our team responds quickly.</p>
                            <div className="mt-contact-list">
                                <a href={company.mapHref} target="_blank" rel="noreferrer"><i className="fas fa-location-dot" /><span><small>Address</small><strong>{company.address}</strong></span></a>
                                <a href={company.phoneHref}><i className="fas fa-phone" /><span><small>Phone</small><strong>{company.phone}</strong></span></a>
                                <a href={company.officeHref}><i className="fas fa-building" /><span><small>Office</small><strong>{company.office}</strong></span></a>
                                <a href={company.emailHref}><i className="far fa-envelope" /><span><small>Email</small><strong>{company.email}</strong></span></a>
                                <div><i className="far fa-clock" /><span><small>Working Hours</small><strong>{company.hours}</strong></span></div>
                            </div>
                            <div className="mt-cta" style={{ padding: 30, marginTop: 22, borderRadius: 22 }}>
                                <Meteors number={8} />
                                <small style={{ color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", fontSize: 12 }}>Need Help? Call Our Help Line</small>
                                <a href={company.helplineHref} style={{ display: "block", fontSize: 30, fontWeight: 800, marginTop: 6 }} className="mt-grad-text">{company.helpline}</a>
                            </div>
                        </Reveal>
                        <Reveal variant="right">
                            <SpotlightCard className="mt-beam" style={{ padding: "clamp(24px,4vw,44px)" }}>
                                <h3 style={{ fontSize: 26, margin: "0 0 6px" }}>Send us a message</h3>
                                <p style={{ marginBottom: 28 }}>We usually respond within one working day.</p>
                                <ContactForm />
                            </SpotlightCard>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="mt-section" style={{ paddingTop: 0 }}>
                <div className="mt-container">
                    <Reveal><div className="mt-map"><iframe src={company.mapEmbed} title="Magnitude Transformers location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></Reveal>
                </div>
            </section>
            <FaqBlock />
        </SiteShell>
    )
}
