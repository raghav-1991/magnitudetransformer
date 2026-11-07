'use client'
import { useState } from "react"
import { videos } from "@/lib/site"
import { Reveal } from "./effects"

// Click-to-play video: self-hosted MP4 ({ src, poster }) or YouTube ({ id }).
// Nothing is downloaded until the visitor presses play (preload="none").
export function VideoPlayer({ src, poster, id, title, large = false }) {
    const [play, setPlay] = useState(false)
    const thumb = poster || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined)
    return (
        <div className={`mt-video mt-beam ${large ? "mt-video--large" : ""}`}>
            {play ? (
                id ? (
                    <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                ) : (
                    <video src={src} poster={poster} controls autoPlay playsInline preload="none" title={title} />
                )
            ) : (
                <button className="mt-video__poster" onClick={() => setPlay(true)} aria-label={`Play ${title}`}>
                    {thumb && <img src={thumb} alt="" loading="lazy" />}
                    <span className="mt-play"><i className="fas fa-play" /></span>
                    <span className="mt-video__title"><i className="fas fa-video" /> {title}</span>
                </button>
            )}
        </div>
    )
}

export default function VideoGrid() {
    return (
        <div className="mt-grid mt-grid-2">
            {videos.map((v, k) => (
                <Reveal key={v.src || v.id} delay={(k % 2) * 0.1}>
                    <VideoPlayer {...v} />
                </Reveal>
            ))}
        </div>
    )
}
