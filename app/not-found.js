"use client"
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-6">
      <div className="max-w-3xl w-full text-center">
        <div className="inline-flex items-center justify-center w-36 h-36 mx-auto rounded-full bg-white/5 ring-1 ring-white/10 mb-6">
          {/* simple droplet SVG illustration */}
          <svg viewBox="0 0 64 64" width="56" height="56" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#8EE1FF" />
                <stop offset="1" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
            <path d="M32 4c6 8 14 16 14 26 0 9-7 18-14 22-7-4-14-13-14-22 0-10 8-18 14-26z" stroke="url(#g)" strokeWidth="2.5" fill="transparent" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="40" cy="18" r="2.5" fill="#8EE1FF" opacity="0.9"/>
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-500">
          404
        </h1>

        <p className="text-xl text-slate-300 mb-6">
          Page not found — looks like you're a little thirsty for content.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors duration-200"
            style={{
              background: "var(--btn-bg, #8EC5FF)",
              color: "var(--btn-color, #000)",
              borderRadius: 9999,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--btn-bg-hover, #6FC0FF)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--btn-bg, #8EC5FF)"}
          >
            Go home
          </a>

          <a
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition"
          >
            About / Help
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Try checking the URL, or return to the homepage. If you think this is an error, contact support.
        </p>
      </div>
    </main>
  );
}
