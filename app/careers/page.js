import SiteShell from "@/components/mt/SiteShell"
import { PageHero, SectionHead, CtaBlock } from "@/components/mt/sections"
import { Reveal, SpotlightCard, OrbitBadge } from "@/components/mt/effects"
import { IMG, jobs, company } from "@/lib/site"

export const metadata = { title: "Careers" }

const mail = (subject) => `${company.emailHref}?subject=${encodeURIComponent(subject)}`

export default function CareersPage() {
    return (
        <SiteShell>
            <PageHero title="Careers" image={IMG("mt-welding.jpg")} text="Grow your career with Magnitude." />
            <section className="mt-section">
                <div className="mt-container">
                    <div className="mt-split">
                        <Reveal variant="left">
                            <span className="mt-eyebrow"><i className="fas fa-rocket" />Grow your career with Magnitude.</span>
                            <h2 style={{ fontSize: "clamp(32px,4.2vw,52px)", margin: "18px 0" }}>Build the electrical infrastructure <span className="mt-grad-text">of tomorrow.</span></h2>
                            <p>We are expanding and looking for talented people who value diverse perspectives and love a challenge. At Magnitude, we value our differences and want every employee to feel respected and supported.</p>
                            <p style={{ marginTop: 14 }}>Come build the electrical infrastructure of tomorrow and bring your ideas and innovation to everything we make.</p>
                            <ul className="mt-checks">
                                {["Hands-on work on power & distribution transformers", "Learn from engineers with 15+ years of experience", "A respectful, inclusive and growing workplace"].map(t => <li key={t}><i className="fas fa-check" />{t}</li>)}
                            </ul>
                            <div className="mt-grid mt-grid-2" style={{ marginBottom: 34 }}>
                                <div className="mt-mini"><i className="fas fa-graduation-cap" /><div><h4>Learn &amp; Grow</h4><p>Training on design, production, testing and quality.</p></div></div>
                                <div className="mt-mini"><i className="fas fa-people-group" /><div><h4>Team Culture</h4><p>Work alongside skilled technicians and engineers.</p></div></div>
                            </div>
                            <a href={mail("Job Application")} className="mt-btn mt-btn--primary">Email Your Resume <i className="fas fa-paper-plane" /></a>
                        </Reveal>
                        <Reveal variant="right" className="mt-about__media">
                            <div className="mt-about__img mt-beam" style={{ borderRadius: 30 }}><img src={IMG("mt-welding.jpg")} alt="Welder at Magnitude factory" style={{ aspectRatio: "4/4.4" }} /></div>
                            <div className="mt-about__since"><OrbitBadge text="WE ARE HIRING • JOIN MAGNITUDE • " top="Join" bottom="Our Team" /></div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="mt-section mt-section--alt">
                <div className="mt-container">
                    <SectionHead center eyebrow="Current Openings" icon="fa-briefcase" title={<>Join our <span className="mt-grad-text">growing team.</span></>}
                        text={`Send your resume to ${company.email} with the position name in the subject line.`} />
                    <div className="mt-grid mt-grid-3">
                        {jobs.map(([icon, t, d], k) => (
                            <Reveal key={t} delay={(k % 3) * 0.1} style={{ display: "flex" }}>
                                <SpotlightCard href={mail(`Application: ${t}`)} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <div className="mt-icon"><i className={`fas ${icon}`} /></div>
                                    <h3>{t}</h3>
                                    <p style={{ flex: 1 }}>{d}</p>
                                    <span className="mt-link" style={{ marginTop: 24 }}>Apply Now <i className="fas fa-arrow-right" /></span>
                                </SpotlightCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBlock title="Ready to power your career?" quote={null}
                text={`Email your resume to ${company.email} or call ${company.phone} to learn more about opportunities at Magnitude Transformers.`}
                btn={["Apply Now", mail("Job Application")]} icon="fa-user-tie" />
        </SiteShell>
    )
}
