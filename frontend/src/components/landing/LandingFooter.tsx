import React from "react";

export default function LandingFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px clamp(16px, 4vw, 48px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        maxWidth: "76rem",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
<svg width="18" height="18" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="1000" rx="118" fill="#C084FC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M250 200H520C690 200 800 320 800 500C800 680 690 800 520 800H250V200ZM390 340V660H510C600 660 660 600 660 500C660 400 600 340 510 340H390Z" fill="black"/>
</svg>
        <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 14 }}>DeployD</span>
      </div>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {[
          { label: "GitHub", href: "https://github.com/Sadat-Rakib/DeployD" },
          { label: "Docs", href: "https://github.com/Sadat-Rakib/DeployD#readme" },
          { label: "Architecture", href: "#architecture" }
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              cursor: "pointer",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {item.label}
          </a>
        ))}
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>
        2026 © All rights reserved.
      </span>
    </footer>
  );
}
