'use client'
import { useState } from "react"
import { company, enquiryTypes, quoteFields } from "@/lib/site"

// No backend is wired yet: on submit we open the visitor's mail client (or WhatsApp)
// with every field pre-filled, addressed to the company inbox.
function send(subject, data, channel) {
    const body = Object.entries(data).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n")
    if (channel === "whatsapp") {
        window.open(`${company.whatsappHref}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank")
    } else {
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
}

function Field({ label, name, type = "text", options, full, required, placeholder }) {
    return (
        <div className={`mt-field ${full ? "is-full" : ""}`}>
            <label htmlFor={name}>{label}{required && <span style={{ color: "var(--red-2)" }}> *</span>}</label>
            {options ? (
                <select id={name} name={name} required={required} defaultValue="">
                    <option value="" disabled>Select…</option>
                    {options.map(o => <option key={o}>{o}</option>)}
                </select>
            ) : type === "textarea" ? (
                <textarea id={name} name={name} required={required} placeholder={placeholder} />
            ) : (
                <input id={name} name={name} type={type} required={required} placeholder={placeholder} />
            )}
        </div>
    )
}

function useSubmit(subject, labels) {
    const [done, setDone] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const channel = e.nativeEvent.submitter?.value || "email"
        const data = {}
        for (const [k, v] of fd.entries()) data[labels[k] || k] = v
        send(subject, data, channel)
        setDone(true)
    }
    return [done, onSubmit]
}

export function ContactForm() {
    const labels = { name: "Name", email: "Email", phone: "Phone", type: "Enquiry Type", message: "Message" }
    const [done, onSubmit] = useSubmit("Website Enquiry – Magnitude Transformers", labels)
    return (
        <form className="mt-form" onSubmit={onSubmit}>
            <Field label="Name" name="name" required placeholder="Your full name" />
            <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
            <Field label="Phone" name="phone" type="tel" required placeholder="+91" />
            <Field label="Enquiry Type" name="type" options={enquiryTypes} />
            <Field label="Message" name="message" type="textarea" full placeholder="Tell us about your requirement…" />
            <div className="is-full mt-btn-row">
                <button type="submit" value="email" className="mt-btn mt-btn--primary">Send Message <i className="fas fa-paper-plane" /></button>
                <button type="submit" value="whatsapp" className="mt-btn mt-btn--ghost"><i className="fab fa-whatsapp" /> Send via WhatsApp</button>
            </div>
            {done && <div className="is-full mt-form-ok"><i className="fas fa-circle-check" />Thanks! Your message is ready in your email / WhatsApp app. Just press send.</div>}
        </form>
    )
}

export function QuoteForm() {
    const labels = {
        name: "Name & Address", phone: "Phone Number", email: "Email Address", kva: "KVA Rating",
        transformerType: "Transformer Type", winding: "Type of Winding", tapChanger: "Tap Changer",
        primaryVoltage: "Primary Voltage", secondaryVoltage: "Secondary Voltage", starRating: "Energy Efficiency / Star Rating",
        application: "Application", finalization: "Approximate Finalization Time of Order", details: "Other Details",
    }
    const [done, onSubmit] = useSubmit("Quote Request – Magnitude Transformers", labels)
    return (
        <form className="mt-form" onSubmit={onSubmit}>
            <Field label="Name & Address" name="name" required full placeholder="Name, company & site address" />
            <Field label="Phone Number" name="phone" type="tel" required placeholder="+91" />
            <Field label="Email Address" name="email" type="email" required placeholder="you@company.com" />
            <Field label="KVA Rating" name="kva" required placeholder="e.g. 500 kVA" />
            <Field label="Transformer Type" name="transformerType" options={quoteFields.transformerType} required />
            <Field label="Type of Winding" name="winding" options={quoteFields.winding} />
            <Field label="Tap Changer" name="tapChanger" options={quoteFields.tapChanger} />
            <Field label="Primary Voltage" name="primaryVoltage" options={quoteFields.primaryVoltage} />
            <Field label="Secondary Voltage" name="secondaryVoltage" options={quoteFields.secondaryVoltage} />
            <Field label="Energy Efficiency / Star Rating" name="starRating" options={quoteFields.starRating} />
            <Field label="Application" name="application" options={quoteFields.application} />
            <Field label="Approximate Finalization Time of Order" name="finalization" options={quoteFields.finalization} full />
            <Field label="Other Details" name="details" type="textarea" full placeholder="Anything else we should know…" />
            <div className="is-full mt-btn-row">
                <button type="submit" value="email" className="mt-btn mt-btn--primary">Get an Instant Price <i className="fas fa-bolt" /></button>
                <button type="submit" value="whatsapp" className="mt-btn mt-btn--ghost"><i className="fab fa-whatsapp" /> Send via WhatsApp</button>
            </div>
            {done && <div className="is-full mt-form-ok"><i className="fas fa-circle-check" />Your quote request is ready in your email / WhatsApp app. Just press send and our engineers will respond quickly.</div>}
        </form>
    )
}
