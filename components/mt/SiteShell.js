'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { company, nav, products, quickLinks } from "@/lib/site"
import { ScrollProgress } from "./effects"

function isActive(item, path) {
    if (item.href === "/") return path === "/"
    if (item.href && path.startsWith(item.href)) return true
    return !!item.children?.some(c => path.startsWith(c.href))
}

function Header() {
    const path = usePathname() || "/"
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(null)
    const [drawer, setDrawer] = useState(false)
    const [sub, setSub] = useState(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    useEffect(() => { setDrawer(false); setOpen(null) }, [path])
    useEffect(() => { document.body.style.overflow = drawer ? "hidden" : "" }, [drawer])

    return (
        <>
            <div className="mt-topbar">
                <div className="mt-container">
                    <div className="mt-topbar__left">
                        <span><span className="mt-pulse" /> ISO 9001:2015 Certified Manufacturer</span>
                        <a href={company.mapHref} target="_blank" rel="noreferrer"><i className="fas fa-location-dot" /> Peenya Industrial Area, Bangalore</a>
                    </div>
                    <div className="mt-topbar__right">
                        <span><i className="far fa-clock" /> {company.hours}</span>
                        <a href={company.emailHref}><i className="far fa-envelope" /> {company.email}</a>
                        <a href={company.phoneHref}><i className="fas fa-phone" /> {company.phone}</a>
                    </div>
                </div>
            </div>

            <header className={`mt-header ${scrolled ? "is-scrolled" : ""}`}>
                <div className="mt-container">
                    <div className="mt-header__bar">
                        <Link href="/" className="mt-logo" aria-label="Magnitude Transformers home">
                            <img src={company.logo} alt="Magnitude Transformers" />
                        </Link>

                        <ul className="mt-nav" onMouseLeave={() => setOpen(null)}>
                            {nav.map((item, k) => (
                                <li key={item.label}
                                    className={`${isActive(item, path) ? "is-active" : ""} ${open === k ? "is-open" : ""}`}
                                    onMouseEnter={() => setOpen(item.children ? k : null)}>
                                    {item.children ? (
                                        item.href ? (
                                            <Link href={item.href} onFocus={() => setOpen(k)}>{item.label} <i className="fas fa-chevron-down" /></Link>
                                        ) : (
                                            <button type="button" onClick={() => setOpen(open === k ? null : k)} aria-expanded={open === k}>{item.label} <i className="fas fa-chevron-down" /></button>
                                        )
                                    ) : (
                                        <Link href={item.href}>{item.label}</Link>
                                    )}
                                    {item.children && (
                                        <div className={`mt-dropdown ${item.children.length < 3 ? "mt-dropdown--sm" : ""}`}>
                                            {item.children.map(c => (
                                                <Link key={c.href + c.label} href={c.href}>
                                                    <i className={`fas ${c.icon}`} />
                                                    <span><strong>{c.label}</strong><small>{c.text}</small></span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-header__cta">
                            <Link href="/get-a-quote" className="mt-btn mt-btn--primary mt-btn--sm">Get a Quote <i className="fas fa-arrow-right" /></Link>
                            <button className="mt-burger" onClick={() => setDrawer(true)} aria-label="Open menu"><i className="fas fa-bars" /></button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mt-drawer ${drawer ? "is-open" : ""}`} aria-hidden={!drawer}>
                <div className="mt-drawer__backdrop" onClick={() => setDrawer(false)} />
                <div className="mt-drawer__panel">
                    <div className="mt-drawer__top">
                        <img src={company.logo} alt="Magnitude Transformers" />
                        <button className="mt-burger" style={{ display: "grid" }} onClick={() => setDrawer(false)} aria-label="Close menu"><i className="fas fa-xmark" /></button>
                    </div>
                    <nav>
                        <ul>
                            {nav.map((item, k) => (
                                <li key={item.label}>
                                    {item.children ? (
                                        <>
                                            <button type="button" onClick={() => setSub(sub === k ? null : k)}>{item.label} <i className={`fas fa-${sub === k ? "minus" : "plus"}`} style={{ fontSize: 13 }} /></button>
                                            <div className={`mt-drawer__sub ${sub === k ? "is-open" : ""}`}>
                                                <ul>{item.children.map(c => <li key={c.href + c.label}><Link href={c.href}><i className={`fas ${c.icon}`} />{c.label}</Link></li>)}</ul>
                                            </div>
                                        </>
                                    ) : <Link href={item.href}>{item.label} <i className="fas fa-arrow-right" style={{ fontSize: 13, opacity: .5 }} /></Link>}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link href="/get-a-quote" className="mt-btn mt-btn--primary">Get a Quote <i className="fas fa-arrow-right" /></Link>
                    <div className="mt-drawer__contact">
                        <a href={company.phoneHref}><i className="fas fa-phone" />{company.phone}</a>
                        <a href={company.helplineHref}><i className="fas fa-headset" />{company.helpline} (Help Line)</a>
                        <a href={company.emailHref}><i className="far fa-envelope" />{company.email}</a>
                        <a href={company.mapHref} target="_blank" rel="noreferrer"><i className="fas fa-location-dot" />{company.address}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

function Footer() {
    return (
        <footer className="mt-footer">
            <div className="mt-footer__glow" />
            <div className="mt-container">
                <div className="mt-footer__grid">
                    <div>
                        <Link href="/" className="mt-footer__logo"><img src={company.logo} alt="Magnitude Transformers" /></Link>
                        <p>{company.footerText}</p>
                        <div className="mt-socials">
                            <a href={company.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
                            <a href={company.phoneHref} aria-label="Call"><i className="fas fa-phone" /></a>
                            <a href={company.emailHref} aria-label="Email"><i className="far fa-envelope" /></a>
                            <a href={company.mapHref} target="_blank" rel="noreferrer" aria-label="Map"><i className="fas fa-location-dot" /></a>
                        </div>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <div className="mt-footer__links">{quickLinks.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
                    </div>
                    <div>
                        <h4>Our Products</h4>
                        <div className="mt-footer__links">
                            {products.map(p => <Link key={p.slug} href={`/${p.slug}`}>{p.menu}</Link>)}
                            <Link href="/get-a-quote">Get a Quote</Link>
                        </div>
                    </div>
                    <div>
                        <h4>Contact Info</h4>
                        <div className="mt-footer__contact">
                            <a href={company.mapHref} target="_blank" rel="noreferrer"><i className="fas fa-location-dot" />{company.address}</a>
                            <a href={company.phoneHref}><i className="fas fa-phone" />{company.phone}</a>
                            <a href={company.helplineHref}><i className="fas fa-headset" />{company.helpline} (Help Line)</a>
                            <a href={company.officeHref}><i className="fas fa-building" />{company.office} (Office)</a>
                            <a href={company.emailHref}><i className="far fa-envelope" />{company.email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-footer__giant" aria-hidden="true">MAGNITUDE</div>
            <div className="mt-container">
                <div className="mt-footer__bottom">
                    <span>© {new Date().getFullYear()} Magnitude Transformers. All Rights Reserved.</span>
                    <nav>
                        <Link href={`/${products[0].slug}`}>Products</Link>
                        <Link href="/get-a-quote">Get a Quote</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact-us">Contact Us</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

function Dock() {
    const [top, setTop] = useState(false)
    useEffect(() => {
        const onScroll = () => setTop(window.scrollY > 600)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <div className="mt-dock">
            <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="is-wa" aria-label="WhatsApp"><i className="fab fa-whatsapp" /><span>Chat on WhatsApp</span></a>
            <a href={company.phoneHref} aria-label="Call us"><i className="fas fa-phone" /><span>{company.phone}</span></a>
            <a href={company.emailHref} aria-label="Email us"><i className="far fa-envelope" /><span>Email us</span></a>
            <Link href="/get-a-quote" aria-label="Get a quote"><i className="fas fa-file-invoice" /><span>Get a Quote</span></Link>
            <button className={`is-top ${top ? "is-visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><i className="fas fa-arrow-up" /><span>Back to top</span></button>
        </div>
    )
}

export default function SiteShell({ children }) {
    return (
        <div className="mt-site">
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
            <Dock />
        </div>
    )
}
