import "./App.css"
import { InstaLogo } from "./logos/instagram"
import { TiktokLogo } from "./logos/titkok"
import { YoutubeLogo } from "./logos/youtube"
import { WindowsLogo } from "./logos/windows"
import { GoogleLogo } from "./logos/google"
import { ReactLogo } from "./logos/react"

export function HomePage() {
  return (
    <>
      <main className="logos">
        <section className="logo">
          <InstaLogo />
          <ReactLogo />
          <TiktokLogo />
          <WindowsLogo />
          <YoutubeLogo />
          <GoogleLogo />
        </section>
      </main>
    </>
  )
}
