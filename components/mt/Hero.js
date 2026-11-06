'use client'
import Link from "next/link"
import { IMG, company } from "@/lib/site"
import { Backdrop, Reveal, Tilt, WordRotate, NumberTicker } from "./effects"

export default function Hero() {
    return (
        <section className="mt-hero">
            <div className="mt-hero__bg"><img src={IMG("mt-hero-transformer.jpg")} alt="" /></div>
            <Backdrop spotlight />
            <div className="mt-container">
                <div className="mt-hero__grid">
                    <div>
                        <Reveal>
                            <span className="mt-eyebrow"><i className="fas fa-certificate" /><span className="mt-shiny">ISO 9001:2015 Certified Manufacturer</span></span>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1>Highly Stable Transformers, <span className="mt-grad-text">Handcrafted to Perfection.</span></h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-hero__lead">Magnitude Transformers designs and manufactures ISI-marked, BEE star-rated power and distribution transformers, from 25 kVA to 5 MVA, backed by the highest level of technical expertise and support.</p>
                        </Reveal>
                        <Reveal delay={0.3} className="mt-hero__rotate">
                            <span>Powering</span>
                            <WordRotate words={["Utilities", "Industries", "Solar Plants", "Multi-storey Buildings", "Hotels & Complexes", "Power Projects"]} />
                        </Reveal>
                        <Reveal delay={0.4} className="mt-btn-row">
                            <Link href="/get-a-quote" className="mt-btn mt-btn--primary">Get a Quote <i className="fas fa-arrow-right" /></Link>
                            <Link href="/oil-filled-distribution-transformer" className="mt-btn mt-btn--ghost">Explore Products</Link>
                        </Reveal>
                        <Reveal delay={0.5} className="mt-hero__trust">
                            <div><strong><NumberTicker value={1250} suffix="+" /></strong><span>Happy Clients</span></div>
                            <div><strong><NumberTicker value={1585} suffix="+" /></strong><span>Projects Delivered</span></div>
                            <div><strong>25 kVA – 8 MVA</strong><span>In-house Design Range</span></div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.25} variant="scale" className="mt-hero__visual">
                        <Tilt max={8}>
                            <div className="mt-hero__frame mt-beam">
                                <img src={IMG("mt-transformer-station.jpg")} alt="Magnitude oil filled distribution transformer" />
                            </div>
                        </Tilt>
                        <div className="mt-float mt-float--1"><i className="fas fa-star" /><div><strong>BEE Star Rated</strong><small>ISI marked · BIS approved</small></div></div>
                        <div className="mt-float mt-float--2"><i className="fas fa-bolt" /><div><strong>Up to 20 MVA</strong><small>Solar duty transformers</small></div></div>
                        <a href={company.phoneHref} className="mt-float mt-float--3"><i className="fas fa-headset" /><div><strong>{company.phone}</strong><small><span className="mt-pulse" /> &nbsp;Engineers available</small></div></a>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
