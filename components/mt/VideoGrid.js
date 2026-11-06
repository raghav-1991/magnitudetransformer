'use client'
import { useState } from "react"
import Link from "next/link"
import { IMG, videos } from "@/lib/site"
import { Reveal } from "./effects"

function Video({ id, title }) {
    const [play, setPlay] = useState(false)
    return (
        <div>
            <div className="mt-video mt-beam">
                {play ? (
                    <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                ) : (
                    <button className="mt-video__poster" onClick={() => setPlay(true)} aria-label={`Play ${title}`}>
                        <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
                        <span className="mt-play"><i className="fas fa-play" /></span>
                    </button>
                )}
            </div>
            <h3 style={{ fontSize: 19, marginTop: 16 }}>{title}</h3>
        </div>
    )
}

export default function VideoGrid() {
    if (!videos.length) {
        return (
            <Reveal>
                <div className="mt-video mt-beam" style={{ maxWidth: 980, margin: "0 auto" }}>
                    <div className="mt-video__poster" style={{ cursor: "default" }}>
                        <img src={IMG("mt-factory-hall.jpg")} alt="Magnitude Transformers factory" />
                        <span className="mt-play"><i className="fas fa-play" /></span>
                    </div>
                </div>
                <div className="mt-center" style={{ marginTop: 26 }}>
                    <p>Drone footage of our facility and installations is coming soon. Meanwhile, browse our <Link href="/gallery" style={{ color: "var(--orange)" }}>photo gallery</Link>.</p>
                </div>
            </Reveal>
        )
    }
    return (
        <div className="mt-grid mt-grid-2">
            {videos.map((v, k) => <Reveal key={v.id} delay={(k % 2) * 0.1}><Video {...v} /></Reveal>)}
        </div>
    )
}
