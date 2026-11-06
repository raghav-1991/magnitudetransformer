'use client'
// 21st.dev-inspired effect primitives, implemented with plain React + CSS (see app/magnitude.css).
import { useEffect, useRef, useState, useCallback, useId } from "react"
import Link from "next/link"

/* Blur-fade reveal on scroll */
export function Reveal({ as: Tag = "div", children, className = "", delay = 0, variant = "", ...rest }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add("is-in"); io.disconnect() }
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
        io.observe(el)
        return () => io.disconnect()
    }, [])
    return (
        <Tag ref={ref} className={`mt-reveal ${variant ? `mt-reveal--${variant}` : ""} ${className}`} style={{ transitionDelay: `${delay}s` }} {...rest}>
            {children}
        </Tag>
    )
}

/* Animated number ticker */
export function NumberTicker({ value, suffix = "", duration = 2200, className = "" }) {
    const ref = useRef(null)
    const [n, setN] = useState(0)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        let raf
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setN(value); return }
        const io = new IntersectionObserver(([e]) => {
            if (!e.isIntersecting) return
            io.disconnect()
            const start = performance.now()
            const tick = (t) => {
                const p = Math.min(1, (t - start) / duration)
                const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
                setN(Math.round(value * eased))
                if (p < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
        }, { threshold: 0.4 })
        io.observe(el)
        return () => { io.disconnect(); cancelAnimationFrame(raf) }
    }, [value, duration])
    return <span ref={ref} className={className}>{n.toLocaleString("en-IN")}{suffix}</span>
}

/* Mouse-tracking spotlight card */
export function SpotlightCard({ as, className = "", children, ...rest }) {
    const href = rest.href
    const Tag = as || (href ? (/^(https?:|mailto:|tel:)/.test(href) ? "a" : Link) : "div")
    const onMove = useCallback((e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
    }, [])
    return <Tag className={`mt-card mt-spot ${className}`} onMouseMove={onMove} {...rest}>{children}</Tag>
}

/* 3D tilt wrapper */
export function Tilt({ children, className = "", max = 10, ...rest }) {
    const ref = useRef(null)
    const onMove = (e) => {
        const el = ref.current
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
    }
    const onLeave = () => { if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)" }
    return <div ref={ref} className={`mt-tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>{children}</div>
}

/* Infinite marquee */
export function Marquee({ children, reverse = false, duration = 40, className = "" }) {
    return (
        <div className={`mt-marquee ${reverse ? "mt-marquee--reverse" : ""} ${className}`} style={{ "--dur": `${duration}s` }}>
            <div className="mt-marquee__track">{children}</div>
            <div className="mt-marquee__track" aria-hidden="true">{children}</div>
        </div>
    )
}

/* Word rotate */
export function WordRotate({ words, interval = 2400 }) {
    const [i, setI] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setI(v => (v + 1) % words.length), interval)
        return () => clearInterval(t)
    }, [words.length, interval])
    const prev = (i - 1 + words.length) % words.length
    return (
        <span className="mt-rotate" aria-live="polite">
            {words.map((w, k) => (
                <span key={w} className={k === i ? "is-active" : k === prev ? "is-leaving" : ""}>{w}</span>
            ))}
        </span>
    )
}

/* Meteors shower */
export function Meteors({ number = 18 }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(Array.from({ length: number }, () => ({
            left: `${Math.floor(Math.random() * 120) - 10}%`,
            delay: `${(Math.random() * 6).toFixed(2)}s`,
            dur: `${(Math.random() * 6 + 4).toFixed(2)}s`,
        })))
    }, [number])
    return (
        <div className="mt-meteors" aria-hidden="true">
            {items.map((m, k) => <span key={k} className="mt-meteor" style={{ left: m.left, animationDelay: m.delay, animationDuration: m.dur }} />)}
        </div>
    )
}

/* Aurora + grid + spotlight backdrop */
export function Backdrop({ grid = true, aurora = true, spotlight = false }) {
    return (
        <>
            {aurora && <div className="mt-aurora" aria-hidden="true"><span /><span /><span /></div>}
            {grid && <div className="mt-gridbg" aria-hidden="true" />}
            {spotlight && <div className="mt-spotlight" aria-hidden="true" />}
        </>
    )
}

/* Circular text orbit badge */
export function OrbitBadge({ text = "MAGNITUDE • TRANSFORMERS • SINCE 2007 • ", top, bottom }) {
    const id = `mt-circle-${useId().replace(/:/g, "")}`
    return (
        <div className="mt-orbit">
            <svg className="mt-orbit__ring" viewBox="0 0 170 170" aria-hidden="true">
                <defs><path id={id} d="M85,85 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" /></defs>
                <text><textPath href={`#${id}`}>{text}</textPath></text>
            </svg>
            <div className="mt-orbit__core">
                <strong className="mt-grad-text">{top}</strong>
                <span>{bottom}</span>
            </div>
        </div>
    )
}

/* Scroll progress bar */
export function ScrollProgress() {
    const ref = useRef(null)
    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement
            const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
            if (ref.current) ref.current.style.transform = `scaleX(${p})`
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return <div ref={ref} className="mt-progress" aria-hidden="true" />
}

/* Accordion (FAQ) */
export function Accordion({ items, defaultOpen = 0 }) {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <div className="mt-faq">
            {items.map(([q, a], k) => (
                <div key={q} className={`mt-faq__item ${open === k ? "is-open" : ""}`}>
                    <button className="mt-faq__q" onClick={() => setOpen(open === k ? -1 : k)} aria-expanded={open === k}>
                        {q}<i className="fas fa-plus" />
                    </button>
                    <div className="mt-faq__a"><div><p>{a}</p></div></div>
                </div>
            ))}
        </div>
    )
}

/* Lightbox gallery */
export function Gallery({ images, layout = "masonry" }) {
    const [idx, setIdx] = useState(-1)
    const close = () => setIdx(-1)
    const go = useCallback((d) => setIdx(i => (i + d + images.length) % images.length), [images.length])
    useEffect(() => {
        if (idx < 0) return
        const onKey = (e) => {
            if (e.key === "Escape") close()
            if (e.key === "ArrowRight") go(1)
            if (e.key === "ArrowLeft") go(-1)
        }
        document.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
    }, [idx, go])
    return (
        <>
            <div className={layout === "masonry" ? "mt-masonry" : "mt-pd-gallery"}>
                {images.map(([src, cap], k) => (
                    <button type="button" key={src} className="mt-gitem" onClick={() => setIdx(k)} aria-label={`Open ${cap}`}>
                        <img src={src} alt={cap} loading="lazy" />
                        <span className="mt-gitem__cap">{cap}<i className="fas fa-expand" /></span>
                    </button>
                ))}
            </div>
            {idx >= 0 && (
                <div className="mt-lightbox" onClick={close} role="dialog" aria-modal="true">
                    <div onClick={(e) => e.stopPropagation()}>
                        <img src={images[idx][0]} alt={images[idx][1]} />
                        <div className="mt-lightbox__cap">{images[idx][1]} · {idx + 1} / {images.length}</div>
                    </div>
                    <button className="is-close" onClick={close} aria-label="Close"><i className="fas fa-xmark" /></button>
                    <button className="is-prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous"><i className="fas fa-chevron-left" /></button>
                    <button className="is-next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next"><i className="fas fa-chevron-right" /></button>
                </div>
            )}
        </>
    )
}
