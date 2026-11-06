'use client'
import Link from "next/link"
import { IMG, company, faqs, heroFeatures, productRange, products, standards, stats, team, galleryHome, industries } from "@/lib/site"
import { Reveal, NumberTicker, SpotlightCard, Tilt, Marquee, Meteors, Backdrop, OrbitBadge, Accordion, Gallery } from "./effects"

export function SectionHead({ eyebrow, icon = "fa-bolt", title, text, center = false, children }) {
    return (
        <Reveal className={`mt-head ${center ? "mt-head--center" : ""}`}>
            {eyebrow && <span className="mt-eyebrow"><i className={`fas ${icon}`} />{eyebrow}</span>}
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            {children}
        </Reveal>
    )
}

export function PageHero({ title, crumbs = [], text, image = IMG("mt-factory-hall.jpg") }) {
    return (
        <section className="mt-pagehero">
            <div className="mt-pagehero__bg"><img src={image} alt="" /></div>
            <Backdrop spotlight />
            <div className="mt-container">
                <Reveal>
                    <nav className="mt-crumbs" aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        {crumbs.map(([label, href]) => (
                            <span key={label} style={{ display: "contents" }}>
                                <i className="fas fa-chevron-right" />
                                {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
                            </span>
                        ))}
                        <i className="fas fa-chevron-right" />
                        <span>{title}</span>
                    </nav>
                    <h1>{title}</h1>
                    {text && <p>{text}</p>}
                </Reveal>
            </div>
        </section>
    )
}

export function StandardsStrip() {
    return (
        <div className="mt-strip">
            <Marquee duration={36}>
                {standards.map(s => <span key={s} className="mt-marquee__item"><i className="fas fa-certificate" />{s}</span>)}
            </Marquee>
        </div>
    )
}

export function BigMarquee({ words = ["Oil Filled", "Dry Type", "Solar Duty", "Furnace Duty", "Custom Designed", "Power Transformers"] }) {
    return (
        <div className="mt-bigtext">
            <Marquee duration={50}>
                {words.map((w, k) => (
                    <span key={w} className="mt-marquee__item">{k % 2 ? <span className="mt-grad-text">{w}</span> : w}<i className="fas fa-bolt mt-grad-text" /></span>
                ))}
            </Marquee>
        </div>
    )
}

export function HeroFeatures() {
    return (
        <div className="mt-hero-features">
            <div className="mt-container">
                <div className="mt-grid mt-grid-3">
                    {heroFeatures.map(([icon, title, text], k) => (
                        <Reveal key={title} delay={k * 0.12}>
                            <SpotlightCard>
                                <span className="mt-card__num">0{k + 1}</span>
                                <div className="mt-icon"><i className={`fas ${icon}`} /></div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function AboutBlock({ full = false }) {
    return (
        <section className="mt-section">
            <div className="mt-container">
                <div className="mt-split">
                    <Reveal variant="left" className="mt-about__media">
                        <div className="mt-about__img mt-beam" style={{ borderRadius: 30 }}>
                            <img src={IMG(full ? "mt-precision-measure.jpg" : "mt-engineer-hardhat.jpg")} alt="Magnitude engineer" />
                        </div>
                        <div className="mt-about__img2"><img src={IMG(full ? "mt-welding.jpg" : "mt-factory-hall.jpg")} alt="Magnitude factory" /></div>
                        <div className="mt-about__since"><OrbitBadge top="2007" bottom="Established" /></div>
                    </Reveal>
                    <Reveal variant="right">
                        {full ? (
                            <>
                                <span className="mt-eyebrow"><i className="fas fa-industry" />Who We Are</span>
                                <h2 style={{ fontSize: "clamp(32px,4.2vw,52px)", margin: "18px 0" }}>Cost-effective designs with <span className="mt-grad-text">assured performance.</span></h2>
                                <p>Magnitude Transformers designs and manufactures distribution and power transformers. Our engineers carefully assess each client&apos;s needs and recommend solutions that are cost-effective, environmentally friendly and compatible with existing systems.</p>
                                <p style={{ marginTop: 14 }}>Every transformer comes with an industry-leading guarantee and dedicated after-sales service, because for us it is always <strong style={{ color: "var(--text)" }}>Customer First! Guaranteed Service.</strong></p>
                                <ul className="mt-checks">
                                    {["Founded in 2007 by experienced transformer engineers", "ISO 9001 certified quality management", "Copper & aluminium wound transformers up to 8000 kVA"].map(t => <li key={t}><i className="fas fa-check" />{t}</li>)}
                                </ul>
                                <div className="mt-grid mt-grid-2" style={{ marginBottom: 34 }}>
                                    <div className="mt-mini"><i className="fas fa-award" /><div><h4>Guaranteed Service</h4><p>Industry-leading guarantee with dedicated after-sales support.</p></div></div>
                                    <div className="mt-mini"><i className="fas fa-cubes-stacked" /><div><h4>Total Solutions</h4><p>Transformers, switchgear, cables, poles, installation &amp; commissioning.</p></div></div>
                                </div>
                                <Link href="/get-a-quote" className="mt-btn mt-btn--primary">Get a Quote <i className="fas fa-arrow-right" /></Link>
                            </>
                        ) : (
                            <>
                                <span className="mt-eyebrow"><i className="fas fa-industry" />About Us</span>
                                <h2 style={{ fontSize: "clamp(32px,4.2vw,52px)", margin: "18px 0" }}>Engineering reliable power <span className="mt-grad-text">since 2007.</span></h2>
                                <p>Founded in 2007 by a team of engineers with deep experience in transformer manufacturing, Magnitude Transformers designs in-house and manufactures dry type, oil cooled, furnace and special transformers for utilities, industrial customers, multi-storey buildings and power projects.</p>
                                <ul className="mt-checks">
                                    {["ISI marked, BEE star-rated & BIS approved transformers", "In-house design from 25 kVA up to 5 MVA", "Compliant with ISO, ISI, BEE and IEC standards"].map(t => <li key={t}><i className="fas fa-check" />{t}</li>)}
                                </ul>
                                <div className="mt-grid mt-grid-2" style={{ marginBottom: 34 }}>
                                    <div className="mt-mini"><i className="fas fa-user-gear" /><div><h4>Expert Engineers</h4><p>Technicians, engineers and quality inspectors under one roof.</p></div></div>
                                    <div className="mt-mini"><i className="fas fa-handshake" /><div><h4>Customer First</h4><p>Industry-leading guarantee and dedicated after-sales service.</p></div></div>
                                </div>
                                <div className="mt-btn-row">
                                    <Link href="/about-us" className="mt-btn mt-btn--primary">Read More <i className="fas fa-arrow-right" /></Link>
                                    <a href={company.phoneHref} className="mt-btn mt-btn--ghost"><i className="fas fa-phone" /> {company.phone}</a>
                                </div>
                            </>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

const productImages = {
    "oil-filled-distribution-transformer": "mt-twin-transformers.jpg",
    "dry-type-transformers": "mt-industrial-machine.jpg",
    "solar-duty-transformers": "mt-solar-farm.jpg",
    "custom-designed-transformer": "mt-electrical-equipment.jpg",
}

export function ProductsBento() {
    const cards = [
        ...products.map(p => ({ href: `/${p.slug}`, icon: p.icon, title: p.short, text: p.cardText, img: productImages[p.slug], chips: p.quick.slice(0, 2).map(q => q[1]) })),
        { href: "/services", icon: "fa-paint-roller", title: "Repairs & Repainting", text: "Expert servicing and repainting to restore protection and extend transformer life.", img: "mt-welding.jpg", chips: ["Servicing", "Repainting"] },
        { href: "/services", icon: "fa-calendar-check", title: "AMC & Rentals", text: "Time-bound annual maintenance contracts and a rental fleet for temporary power needs.", img: "mt-control-panel.jpg", chips: ["AMC", "Rental fleet"] },
    ]
    const layout = ["is-feature", "", "", "", "", ""]
    return (
        <section className="mt-section mt-section--alt">
            <Backdrop aurora={false} />
            <div className="mt-container">
                <div className="mt-split mt-split--head">
                    <SectionHead eyebrow="Products & Services" icon="fa-bolt" title={<>Transformers engineered for <span className="mt-grad-text">every load.</span></>} />
                    <Reveal><p style={{ fontSize: 17 }}>From oil filled distribution units to solar duty and custom-designed transformers, plus repairs, AMC and rentals, we cover the complete lifecycle of your power equipment.</p></Reveal>
                </div>
                <div className="mt-bento">
                    {cards.map((c, k) => (
                        <Reveal key={c.title} delay={(k % 3) * 0.1} className={layout[k] || ""} style={{ display: "flex" }}>
                            <SpotlightCard href={c.href} className={`mt-pcard ${layout[k]}`} style={{ width: "100%" }}>
                                <div className="mt-pcard__bg"><img src={IMG(c.img)} alt="" loading="lazy" /></div>
                                <div>
                                    <div className="mt-icon"><i className={`fas ${c.icon}`} /></div>
                                </div>
                                <div>
                                    <h3>{c.title}</h3>
                                    <p style={{ marginTop: 10 }}>{c.text}</p>
                                    <div className="mt-pcard__foot">
                                        <div className="mt-chips">{c.chips.map(t => <span className="mt-chip" key={t}><i className="fas fa-bolt" />{t}</span>)}</div>
                                        <span className="mt-pcard__arrow"><i className="fas fa-arrow-right" /></span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function CtaBlock({ title = "Need a transformer built to your exact specification?", quote = "We don't want to push our ideas on to customers, we simply want to make what they want.", text = "Share your requirements and get a quote on power devices and setup.", btn = ["Enquiry Now", "/get-a-quote"], secondary = true, icon = "fa-bolt", tight = false }) {
    return (
        <section className={`mt-section ${tight ? "mt-section--tight" : ""}`}>
            <div className="mt-container">
                <Reveal variant="scale">
                    <div className="mt-cta mt-beam">
                        <Meteors number={16} />
                        <i className={`fas ${icon} mt-cta__icon`} />
                        <h2>{title}</h2>
                        {quote && <blockquote>&ldquo;{quote}&rdquo;</blockquote>}
                        {text && <p>{text}</p>}
                        <div className="mt-btn-row">
                            {btn[1].startsWith("tel:") || btn[1].startsWith("mailto:")
                                ? <a href={btn[1]} className="mt-btn mt-btn--primary">{btn[0]} <i className="fas fa-arrow-right" /></a>
                                : <Link href={btn[1]} className="mt-btn mt-btn--primary">{btn[0]} <i className="fas fa-arrow-right" /></Link>}
                            {secondary && <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="mt-btn mt-btn--ghost"><i className="fab fa-whatsapp" /> WhatsApp Us</a>}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export function ProductRange({ light = true }) {
    return (
        <section className={`mt-section ${light ? "mt-section--light" : ""}`}>
            <Backdrop aurora={false} />
            <div className="mt-container">
                <SectionHead center eyebrow="Product Range" icon="fa-layer-group"
                    title={<>Copper &amp; aluminium wound transformers for <span className="mt-grad-text">every rating.</span></>}
                    text="We manufacture both copper and aluminium conductor transformers, designed to meet or exceed IS, CBIP, REC, BS, NEMA, IEC and ANSI standards." />
                <div className="mt-grid mt-grid-3">
                    {productRange.map((r, k) => (
                        <Reveal key={r.tag} delay={k * 0.12} style={{ display: "flex" }}>
                            <Tilt max={6} style={{ display: "flex", width: "100%" }}>
                                <SpotlightCard className={`mt-range ${r.featured ? "is-featured mt-beam" : ""}`} style={{ width: "100%" }}>
                                    {r.featured && <span className="mt-badge-pop">Up to 66 kV</span>}
                                    <div className="mt-range__img"><img src={IMG(r.img)} alt={r.tag} loading="lazy" /></div>
                                    <div className="mt-range__body">
                                        <span className="mt-range__tag">{r.tag}</span>
                                        <h3 className="mt-range__title">{r.title}</h3>
                                        <ul>{r.items.map(i => <li key={i}><i className="fas fa-circle-check" />{i}</li>)}</ul>
                                        <Link href="/get-a-quote" className={`mt-btn ${r.featured ? "mt-btn--primary" : light ? "mt-btn--dark" : "mt-btn--ghost"}`}>Get a Quote <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </SpotlightCard>
                            </Tilt>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Stats({ title = "Trusted by utilities, industries and infrastructure projects across India." }) {
    return (
        <section className="mt-section mt-section--tight mt-stats">
            <Backdrop />
            <div className="mt-container">
                <Reveal className="mt-head mt-head--center" style={{ marginBottom: 44 }}>
                    <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)" }}>{title}</h2>
                </Reveal>
                <div className="mt-grid mt-grid-4">
                    {stats.map((s, k) => (
                        <Reveal key={s.label} delay={k * 0.1}>
                            <div className="mt-stat mt-beam">
                                <strong className="mt-grad-text"><NumberTicker value={s.value} suffix={s.suffix} /></strong>
                                <span>{s.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function GalleryBlock({ images = galleryHome, eyebrow = "Gallery", title = <>Inside our manufacturing <span className="mt-grad-text">&amp; installations.</span></>, more = true }) {
    return (
        <section className="mt-section">
            <div className="mt-container">
                <div className="mt-split mt-split--head">
                    <SectionHead eyebrow={eyebrow} icon="fa-images" title={title} />
                    {more && <Reveal style={{ justifySelf: "end" }}><Link href="/gallery" className="mt-link">View Full Gallery <i className="fas fa-arrow-right" /></Link></Reveal>}
                </div>
                <Reveal><Gallery images={images.map(([f, c]) => [IMG(f), c])} /></Reveal>
            </div>
        </section>
    )
}

const steps = [
    ["In-house Design", "Design engineers use advanced engineering software to create cost-effective, custom designs."],
    ["Raw Material Inspection", "Quality checks start at raw material identification, followed by regular stage-wise inspection."],
    ["Testing & Validation", "Routine and special tests, DVDF testing with a 100 Hz generator and heat run tests up to 5 MVA."],
    ["Delivery & After-sales", "Installation, commissioning and dedicated after-sales service backed by an industry-leading guarantee."],
]

export function WhyChoose() {
    return (
        <section className="mt-section mt-section--alt">
            <Backdrop aurora={false} />
            <div className="mt-container">
                <div className="mt-split">
                    <div>
                        <SectionHead eyebrow="Why Choose Us" icon="fa-medal"
                            title={<>Quality you can measure, <span className="mt-grad-text">support you can count on.</span></>}
                            text="Our team of technicians, engineers, quality inspectors and skilled personnel delivers handcrafted, stable transformers with complete technical support. We also offer testing, calibration, transformer oil filtration and trading of lab and testing equipment, all in compliance with ISO, ISI, BEE and IEC standards." />
                        <Reveal className="mt-btn-row">
                            <Link href="/about-us" className="mt-btn mt-btn--primary">Learn About Us <i className="fas fa-arrow-right" /></Link>
                            <Link href="/services" className="mt-btn mt-btn--ghost">Our Services</Link>
                        </Reveal>
                    </div>
                    <div className="mt-steps">
                        {steps.map(([t, d], k) => (
                            <Reveal key={t} delay={k * 0.12} variant="right">
                                <div className="mt-step">
                                    <span className="mt-step__n">0{k + 1}</span>
                                    <div><h4>{t}</h4><p>{d}</p></div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Team() {
    return (
        <section className="mt-section">
            <div className="mt-container">
                <SectionHead center eyebrow="Our Team" icon="fa-people-group"
                    title={<>Skilled hands behind <span className="mt-grad-text">every transformer.</span></>}
                    text="Led by a founder with over 15 years in transformer design, manufacturing and sales, and supported by an advisory board from IT, chemicals and academia." />
                <div className="mt-grid mt-grid-3">
                    {team.map((m, k) => (
                        <Reveal key={m.title} delay={k * 0.12}>
                            <Tilt max={8}>
                                <div className="mt-team">
                                    <img src={IMG(m.img)} alt={m.title} loading="lazy" />
                                    <div className="mt-team__info">
                                        <span className="mt-chip"><i className="fas fa-bolt" />{m.tag}</span>
                                        <h3>{m.title}</h3>
                                        <div className="mt-team__line" />
                                    </div>
                                </div>
                            </Tilt>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function FaqBlock({ light = false }) {
    return (
        <section className={`mt-section ${light ? "mt-section--light" : ""}`}>
            <div className="mt-container">
                <div className="mt-split mt-split--60" style={{ alignItems: "start", gridTemplateColumns: ".85fr 1.15fr" }}>
                    <div className="mt-sticky">
                        <SectionHead eyebrow="FAQ" icon="fa-circle-question" title={<>Frequently Asked <span className="mt-grad-text">Questions</span></>}
                            text="Answers to common questions about our transformers, certifications and services. Can't find what you need? Our team is happy to help." />
                        <Reveal className="mt-btn-row">
                            <Link href="/contact-us" className="mt-btn mt-btn--primary">Ask a Question <i className="fas fa-arrow-right" /></Link>
                            <a href={company.helplineHref} className="mt-btn mt-btn--ghost"><i className="fas fa-headset" /> Help Line</a>
                        </Reveal>
                    </div>
                    <Reveal><Accordion items={faqs} /></Reveal>
                </div>
            </div>
        </section>
    )
}

export function Industries() {
    return (
        <section className="mt-section mt-section--alt">
            <Backdrop aurora={false} />
            <div className="mt-container">
                <SectionHead center eyebrow="Industries We Serve" icon="fa-globe" title={<>Powering <span className="mt-grad-text">every sector.</span></>}
                    text="Our transformers are approved under BIS standards for utilities, industrial customers, multi-storey buildings and power projects." />
                <div className="mt-grid mt-grid-3">
                    {industries.map(([icon, t, d], k) => (
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
    )
}
