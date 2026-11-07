import SiteShell from "@/components/mt/SiteShell"
import { PageHero, GalleryBlock, FaqBlock, CtaBlock } from "@/components/mt/sections"
import { PIC, galleryAll } from "@/lib/site"

export const metadata = { title: "Gallery" }

export default function GalleryPage() {
    return (
        <SiteShell>
            <PageHero title="Gallery" image={PIC("DJI_0911-scaled.jpg")} text="Manufacturing, testing & installations." />
            <GalleryBlock images={galleryAll} eyebrow="Our Gallery" more={false} title={<>Manufacturing, testing <span className="mt-grad-text">&amp; installations.</span></>} />
            <CtaBlock title="See our transformers in action." quote={null} text="Watch drone footage of our facility and installations in the video gallery."
                btn={["Video Gallery", "/video-gallery"]} icon="fa-circle-play" secondary={false} tight />
            <FaqBlock />
        </SiteShell>
    )
}
