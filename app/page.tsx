'use client'

import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-2xl">
          {/* Profile Card */}
          <div className="backdrop-blur-xl bg-card/40 border border-border/30 rounded-3xl p-8 md:p-12 apela-2xl hover:apela-accent/10 transition-apela duration-300">
            
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-full blur-xl opacity-50" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-accent/30">
               <Image
                 src="/images/a_c5cae4fbb84f0af785b41969f0fc0ff1.gif"
                 alt="𝐀𝐩𝐞𝐥𝐚 𝐊!𝐧𝐠"
                 width={300}
                 height={300}
                 className="object-cover rounded-full"
                 priority
                    />
                </div>
              </div>

              {/* Profile Info */}
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 tracking-tight">
                𝐀𝐩𝐞𝐥𝐚 𝐊!𝐧𝐠
              </h1>
              <p className="text-accent text-lg md:text-xl font-medium mb-2">
                𝐇𝐞/𝐇𝐢𝐦
              </p>
              <p className="text-accent text-base md:text-lg font-medium mb-4 flex items-center justify-center gap-2">
                ✨ 𝐍𝐨 𝐌𝐨𝐧𝐞𝐲 𝐍𝐨 𝐇𝐨𝐧𝐞𝐲
              </p>
              <p className="text-muted-foreground text-center max-w-md text-sm md:text-base leading-relaxed">
                𝐉𝐨𝐢𝐧 𝐓𝐨 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐅𝐨𝐫 𝐀𝐧𝐲 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐄𝐧𝐣𝐨𝐲.
              </p>
            </div>

            {/* Spotify Player */}
             <div className="mb-4">
               <iframe
                 style={{ borderRadius: '12px' }}
                 src="https://open.spotify.com/embed/playlist/3d0fhtCuf3o7bXQx4ri5S1?utm_source=generator"
                 width="100%"
                 height="152"
                 frameBorder="0"
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                 loading="lazy"
               />
             </div>



            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://discord.gg/MakuRwbfRR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5865F2] to-[#4752C4] p-1 transition-all duration-300 hover:scale-105 hover:bg-[#5865F2]/50"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-xl bg-background px-6 py-4 transition-all duration-300 group-hover:bg-background/80">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="#5865F2"
              >
                <path d="M19.54 2.5A17.53 17.53 0 0 0 14.04 1l-.27.55a16.78 16.78 0 0 1 4.12 1.3 14.06 14.06 0 0 0-1.42-1.35ZM9.96 1c-2 .2-3.95.7-5.5 1.5-.58.5-1 1.1-1.42 1.35A16.78 16.78 0 0 1 7.16 1.55L6.9 1A17.53 17.53 0 0 0 1.4 2.5C.7 3.7.3 5 .2 6.3c1.2 1 2.4 1.7 3.6 2.3a12.5 12.5 0 0 0 10.4 0c1.2-.6 2.4-1.3 3.6-2.3-.1-1.3-.5-2.6-1.2-3.8A17.53 17.53 0 0 0 9.96 1ZM8.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 18c-2.2 0-4.3-1-5.5-2.5h11C16.3 17 14.2 18 12 18Z"/>
              </svg>
                  <span className="font-semibold text-sm md:text-base">𝐃𝐢𝐬𝐜𝐨𝐫𝐝</span>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#333] to-[#1a1a1a] p-1 transition-all duration-300 hover:apela-lg hover:apela-white/20"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-xl bg-background px-6 py-4 transition-all duration-300 group-hover:bg-background/80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">𝐆𝐢𝐭𝐇𝐮𝐛</span>
                </div>
              </a>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-muted-foreground text-sm">
            <p>𝐃𝐞𝐯 {'</>'} : 𝐀𝐩𝐞𝐥𝐚 𝐊!𝐧𝐠</p>
          </div>
        </div>
      </div>
    </div>
  )
}
