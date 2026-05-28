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
          <div className="backdrop-blur-xl bg-card/40 border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-accent/10 transition-shadow duration-300">
            
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-full blur-xl opacity-50" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-accent/30">
                  <Image
                    src="/cat-programmer.jpg"
                    alt="Apela.Exe!"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 tracking-tight">
                𝗔𝗽𝗲𝗹𝗮.𝗘𝘅𝗲!
              </h1>
              <p className="text-accent text-lg md:text-xl font-medium mb-2">
                He/Him
              </p>
              <p className="text-accent text-base md:text-lg font-medium mb-4 flex items-center justify-center gap-2">
                ✨ No Money No Honey
              </p>
              <p className="text-muted-foreground text-center max-w-md text-sm md:text-base leading-relaxed">
                Join To My Discord <a href="https://dsc.gg/StyleX" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Dsc.gg/StyleX</a> For Any Question Enjoy.
              </p>
            </div>

            {/* Spotify Player */}
            <div className="mb-8">
              <iframe
                style={{ borderRadius: '8px' }}
                src="https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>



            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://discord.gg/yDjbwHhjET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5865F2] to-[#4752C4] p-1 transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/50"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-xl bg-background px-6 py-4 transition-all duration-300 group-hover:bg-background/80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#5865F2' }}>
                    <path d="M20.317 4.3671a19.8067 19.8067 0 00-4.8851-1.5152.0742.0742 0 00-.0809.0371c-.210.3755-.4424.8649-.6052 1.25.56-.0838 1.1144-.2053 1.6588-.2053a.0747.0747 0 01.0787.0659c.494 1.6066 1.4767 4.2176 2.1995 5.5959a.0707.0707 0 01-.0039.0857 19.9494 19.9494 0 01-5.7936 3.0294.0744.0744 0 01-.0674-.0394c-.145-.585-.3015-1.1522-.3702-1.740a.0757.0757 0 01.02-.0643 4.716 4.716 0 00.91-.595.0744.0744 0 00.031-1.022c-.329-.217-.6365-.466-.934-.716a.0744.0744 0 00-.033-.033s-.023-.017-.07-.036a10.518 10.518 0 01-1.5-.721.0746.0746 0 01-.022-.1091c.113-.175.243-.359.364-.545a.0741.0741 0 01.52-.071 15.456 15.456 0 004.597 1.465.0842.0842 0 00.583-.329 5.894 5.894 0 00.321-1.029.073.073 0 00-.038-.052 13.201 13.201 0 01-1.905-.892.0744.0744 0 01-.034-1.014.0826.0826 0 01.066-.031q.596.291 1.186.578a.0747.0747 0 00.11-.033 16.175 16.175 0 00.5-5.379.0759.0759 0 00-.02-.0658z" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">Discord</span>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#333] to-[#1a1a1a] p-1 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <div className="relative flex items-center justify-center gap-3 rounded-xl bg-background px-6 py-4 transition-all duration-300 group-hover:bg-background/80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">GitHub</span>
                </div>
              </a>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-muted-foreground text-sm">
            <p>𝐃𝐞𝐯 {'</>'} : 𝐀𝐩𝐞𝐥𝐚.𝐄𝐱𝐞!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
