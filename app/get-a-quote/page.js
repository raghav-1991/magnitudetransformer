import SiteShell from "@/components/mt/SiteShell"
import { PageHero, StandardsStrip } from "@/components/mt/sections"
import { Reveal, SpotlightCard, Backdrop } from "@/components/mt/effects"
import { QuoteForm } from "@/components/mt/forms"
import { PIC, company } from "@/lib/site"

export const metadata = { title: "Get a Quote" }

export default function QuotePage() {
    return (
        <SiteShell>
            <PageHero title="Get a Quote" image={PIC("SLV_4864-scaled.jpg")} text="Get an instant price for your transformer." />
            <section className="mt-section">
                <Backdrop aurora={false} />
                <div className="mt-container">
                    <div className="mt-split" style={{ gridTemplateColumns: ".85fr 1.15fr", alignItems: "start" }}>
                        <Reveal variant="left" className="mt-sticky">
                            <span className="mt-eyebrow"><i className="fas fa-file-invoice" />Enquiry</span>
                            <h2 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "18px 0" }}>Get an instant price for <span className="mt-grad-text">your transformer.</span></h2>
                            <p>For quotes on power devices and setup, share your requirements below. ISI licensed, BEE star rated and BIS approved transformers for utilities, industrial customers, multi-storey buildings and more.</p>
                            <blockquote style={{ margin: "26px 0", paddingLeft: 20, borderLeft: "3px solid var(--red)", color: "var(--text)", fontStyle: "italic", fontSize: 17 }}>
                                &ldquo;We don&apos;t want to push our ideas on to customers, we simply want to make what they want.&rdquo;
                            </blockquote>
                            <div className="mt-contact-list">
                                <a href={company.mapHref} target="_blank" rel="noreferrer"><i className="fas fa-location-dot" /><span><small>Visit</small><strong>{company.address}</strong></span></a>
                                <a href={company.phoneHref}><i className="fas fa-phone" /><span><small>Prefer to talk? Call us</small><strong>{company.phone}</strong></span></a>
                                <a href={company.officeHref}><i className="fas fa-building" /><span><small>Office</small><strong>{company.office}</strong></span></a>
                                <a href={company.emailHref}><i className="far fa-envelope" /><span><small>Email</small><strong>{company.email}</strong></span></a>
                                <div><i className="far fa-clock" /><span><small>Working Hours</small><strong>{company.hours}</strong></span></div>
                            </div>
                        </Reveal>
                        <Reveal variant="right">
                            <SpotlightCard className="mt-beam" style={{ padding: "clamp(24px,4vw,44px)" }}>
                                <h3 style={{ fontSize: 26, margin: "0 0 6px" }}>Transformer Requirements</h3>
                                <p style={{ marginBottom: 28 }}>Fill in what you know. Our engineers will help with the rest.</p>
                                <QuoteForm />
                            </SpotlightCard>
                        </Reveal>
                    </div>
                </div>
            </section>
            <StandardsStrip />
        </SiteShell>
    )
}
