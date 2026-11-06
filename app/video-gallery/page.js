import SiteShell from "@/components/mt/SiteShell"
import { PageHero, SectionHead, CtaBlock } from "@/components/mt/sections"
import VideoGrid from "@/components/mt/VideoGrid"
import { IMG } from "@/lib/site"

export const metadata = { title: "Video Gallery" }

export default function VideoGalleryPage() {
    return (
        <SiteShell>
            <PageHero title="Video Gallery" crumbs={[["Gallery", "/gallery"]]} image={IMG("mt-factory-machines.jpg")} text="A closer look at Magnitude." />
            <section className="mt-section">
                <div className="mt-container">
                    <SectionHead center eyebrow="Video Gallery" icon="fa-circle-play" title={<>A closer look at <span className="mt-grad-text">Magnitude.</span></>} />
                    <VideoGrid />
                </div>
            </section>
            <CtaBlock title="Want to visit our facility?" quote={null}
                text="We welcome clients to see our manufacturing and testing process first-hand at Peenya Industrial Area, Bangalore."
                btn={["Contact Us", "/contact-us"]} icon="fa-industry" />
        </SiteShell>
    )
}
