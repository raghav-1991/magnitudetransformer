import Link from "next/link"
import SiteShell from "@/components/mt/SiteShell"
import { PageHero, Industries, Stats, WhyChoose, CtaBlock, StandardsStrip, ClientLogos } from "@/components/mt/sections"
import { Reveal, OrbitBadge } from "@/components/mt/effects"
import { PIC } from "@/lib/site"

export const metadata = { title: "Clientele" }

export default function ClientelePage() {
    return (
        <SiteShell>
            <PageHero title="Clientele" image={PIC("trtyrt.jpg")} text="Trusted by 1,250+ clients across India." />
            <section className="mt-section">
                <div className="mt-container">
                    <div className="mt-split">
                        <Reveal variant="left">
                            <span className="mt-eyebrow"><i className="fas fa-handshake" />Our Clients</span>
                            <h2 style={{ fontSize: "clamp(32px,4.2vw,52px)", margin: "18px 0" }}>Trusted by <span className="mt-grad-text">1,250+ clients</span> across India.</h2>
                            <p>From state utilities and industrial manufacturers to commercial complexes, hotels and solar developers, our transformers power businesses that cannot afford downtime.</p>
                            <ul className="mt-checks">
                                {["1,585+ projects delivered", "100% client satisfaction", "Long-term AMC relationships"].map(t => <li key={t}><i className="fas fa-check" />{t}</li>)}
                            </ul>
                            <div className="mt-grid mt-grid-2" style={{ marginBottom: 34 }}>
                                <div className="mt-mini"><i className="fas fa-arrows-rotate" /><div><h4>Repeat Business</h4><p>Clients return to us for upgrades, AMC and new projects.</p></div></div>
                                <div className="mt-mini"><i className="fas fa-map-location-dot" /><div><h4>Pan-India Reach</h4><p>Supplying utilities and industries across the country.</p></div></div>
                            </div>
                            <Link href="/get-a-quote" className="mt-btn mt-btn--primary">Become a Client <i className="fas fa-arrow-right" /></Link>
                        </Reveal>
                        <Reveal variant="right" className="mt-about__media">
                            <div className="mt-about__img mt-beam" style={{ borderRadius: 30 }}><img src={PIC("rwerwer-1-scaled.jpg")} alt="Magnitude transformer installed on site" style={{ aspectRatio: "4/4.4", objectPosition: "62% center" }} /></div>
                            <div className="mt-about__since"><OrbitBadge text="1585+ PROJECTS • 100% SATISFACTION • " top="1250+" bottom="Clients" /></div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <ClientLogos grid title={<>Some of the names <span className="mt-grad-text">we power.</span></>} />
            <StandardsStrip />
            <Industries />
            <Stats />
            <WhyChoose />
            <CtaBlock title={<>Join <span className="mt-grad-text">1,250+</span> satisfied clients.</>} quote={null}
                text="Tell us about your project and get a competitive quote from our engineering team." btn={["Enquiry Now", "/get-a-quote"]} icon="fa-handshake" />
        </SiteShell>
    )
}
