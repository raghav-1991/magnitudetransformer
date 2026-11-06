import Link from "next/link"
import SiteShell from "@/components/mt/SiteShell"
import { Backdrop } from "@/components/mt/effects"

export default function NotFound() {
    return (
        <SiteShell>
            <section className="mt-pagehero" style={{ minHeight: "80vh", display: "grid", placeItems: "center" }}>
                <Backdrop spotlight />
                <div className="mt-container">
                    <h1 style={{ fontSize: "clamp(120px,22vw,260px)", lineHeight: .9 }} className="mt-grad-text">404</h1>
                    <h2 style={{ fontSize: 34, marginTop: 10 }}>Oops! Page not found</h2>
                    <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <div className="mt-btn-row" style={{ justifyContent: "center", marginTop: 32 }}>
                        <Link href="/" className="mt-btn mt-btn--primary">Back to Home <i className="fas fa-arrow-right" /></Link>
                        <Link href="/contact-us" className="mt-btn mt-btn--ghost">Contact Us</Link>
                    </div>
                </div>
            </section>
        </SiteShell>
    )
}
