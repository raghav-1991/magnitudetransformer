export default function Loading() {
    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 3000, display: "grid", placeItems: "center", background: "#ffffff" }}>
            <style>{`@keyframes mtl{0%{transform:scaleX(0);transform-origin:0 50%}50%{transform:scaleX(1);transform-origin:0 50%}51%{transform-origin:100% 50%}100%{transform:scaleX(0);transform-origin:100% 50%}}`}</style>
            <div style={{ textAlign: "center" }}>
                <img src="/assets/img/mt/magnitude-official-logo.png" alt="Magnitude Transformers" style={{ height: 90, margin: "0 auto" }} />
                <div style={{ width: 160, height: 3, margin: "22px auto 0", borderRadius: 3, overflow: "hidden", background: "rgba(15,23,42,.08)" }}>
                    <div style={{ height: "100%", background: "linear-gradient(120deg,#ff2e3b,#ff6a2f,#ffb547)", animation: "mtl 1.2s ease-in-out infinite" }} />
                </div>
            </div>
        </div>
    )
}
