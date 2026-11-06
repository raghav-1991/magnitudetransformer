import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import "./magnitude.css"
import { dM_Sans, } from '@/lib/font'

export const metadata = {
    title: {
        default: "Magnitude Transformers | Power of Empowering",
        template: "%s | Magnitude Transformers",
    },
    description: "ISO certified manufacturer of ISI-licensed, BEE star-rated power and distribution transformers, approved under BIS standards for utilities, industries and multi-storey buildings. Peenya Industrial Area, Bangalore.",
    icons: { icon: "/assets/img/mt/magnitude-official-logo.png" },
}

export const viewport = { themeColor: "#ffffff" }

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dM_Sans.variable}`}>
            <body style={{ background: "#ffffff" }}>{children}</body>
        </html>
    )
}
