'use client'
import Link from "next/link"
import { products } from "@/lib/site"
import SiteShell from "./SiteShell"
import { PageHero, SectionHead, CtaBlock, BigMarquee } from "./sections"
import { Reveal, SpotlightCard, Tilt, Gallery, Backdrop } from "./effects"

export default function ProductPage({ slug }) {
    const p = products.find(x => x.slug === slug)
    return (
        <SiteShell>
            <PageHero title={p.title} crumbs={[["Products", null]]} image={p.hero} text={p.cardText} />

            {/* product switcher */}
            <div className="mt-container" style={{ marginTop: -20, position: "relative", zIndex: 2 }}>
                <Reveal className="mt-tabs">
                    {products.map(x => (
                        <Link key={x.slug} href={`/${x.slug}`} className={x.slug === slug ? "is-active" : ""}><i className={`fas ${x.icon}`} />{x.short}</Link>
                    ))}
                </Reveal>
            </div>

            <section className="mt-section">
                <div className="mt-container">
                    <div className="mt-split">
                        <Reveal variant="left">
                            <Tilt max={6}>
                                <div className="mt-pd__img mt-beam"><img src={p.hero} alt={p.title} /></div>
                            </Tilt>
                        </Reveal>
                        <Reveal variant="right">
                            <span className="mt-eyebrow"><i className={`fas ${p.icon}`} />Products</span>
                            <h2 style={{ fontSize: "clamp(32px,4vw,50px)", margin: "18px 0 20px" }}>{p.title}</h2>
                            {p.intro.map(t => <p key={t} style={{ marginBottom: 14 }}>{t}</p>)}
                            <div className="mt-quick">
                                {p.quick.map(([k, v]) => <div key={k}><small>{k}</small><strong className="mt-grad-text">{v}</strong></div>)}
                            </div>
                            <div className="mt-btn-row" style={{ marginTop: 34 }}>
                                <Link href="/get-a-quote" className="mt-btn mt-btn--primary">Get a Quote <i className="fas fa-arrow-right" /></Link>
                                <a href="#specs" className="mt-btn mt-btn--ghost">View Specifications</a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="mt-section mt-section--alt" id="specs">
                <Backdrop aurora={false} />
                <div className="mt-container">
                    <div className="mt-split" style={{ alignItems: "start" }}>
                        <div className="mt-sticky">
                            <SectionHead eyebrow="Technical Specifications" icon="fa-table-list" title={<>Built to <span className="mt-grad-text">specification.</span></>} />
                            <Reveal>
                                <table className="mt-spec">
                                    <tbody>{p.specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody>
                                </table>
                            </Reveal>
                        </div>
                        <div>
                            <SectionHead eyebrow={p.listTitle} icon="fa-list-check" title={p.listText ? "Built Around Your Application" : <>Engineered <span className="mt-grad-text">features.</span></>} text={p.listText} />
                            {p.lists.map(l => (
                                <Reveal key={l.title || "list"} style={{ marginBottom: 26 }}>
                                    {l.title && <h4 style={{ fontSize: 18, marginBottom: 6 }}>{l.title}</h4>}
                                    <ul className="mt-checks" style={{ margin: "14px 0 0" }}>{l.items.map(i => <li key={i}><i className="fas fa-check" />{i}</li>)}</ul>
                                </Reveal>
                            ))}
                            <div className="mt-grid" style={{ gap: 14 }}>
                                {p.features2.map(([icon, t, d], k) => (
                                    <Reveal key={t} delay={k * 0.1} variant="right">
                                        <div className="mt-mini"><i className={`fas ${icon}`} /><div><h4>{t}</h4><p>{d}</p></div></div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-section">
                <div className="mt-container">
                    <SectionHead center eyebrow="Applications" icon="fa-bolt" title={<>Where it <span className="mt-grad-text">performs best.</span></>} />
                    <div className="mt-grid mt-grid-3">
                        {p.features.map(([icon, t, d], k) => (
                            <Reveal key={t} delay={k * 0.12}>
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

            <section className="mt-section mt-section--tight" style={{ paddingTop: 0 }}>
                <div className="mt-container">
                    <Reveal><Gallery layout="grid" images={p.gallery} /></Reveal>
                </div>
            </section>

            <BigMarquee />

            <CtaBlock title={`Get a quote for your ${p.title.toLowerCase().replace("transformers", "transformer")}.`} quote={null}
                text="Tell us your kVA rating, voltage, winding and tap changer requirements, and our engineers will recommend the right solution with a competitive quote."
                btn={["Get a Quote", "/get-a-quote"]} icon={p.icon} />
        </SiteShell>
    )
}
