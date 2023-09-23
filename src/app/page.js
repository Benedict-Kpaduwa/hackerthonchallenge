import Underline from './components/Underline'
import Header from './pages/Header'
import Intro from './pages/Intro'
import GuildLines from './pages/GuildLines'
import JC from './pages/JC'
import Faq from './pages/Faqs';
import Timeline from './pages/Timeline'
import Prices from './pages/Prices'
import Parnters from './pages/Partners'
import Privacy from './pages/Privacy'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bgcolor min-w-full w-full">
      <div>
        <Header />
        <Underline />
      </div>

      <div id="overview">
        <Intro />
        <Underline />
      </div>

      <div id="guildlines">
        <GuildLines />
        <Underline />
      </div>

      <div id="jc">
        <JC />
        <Underline />
      </div>

      <div id="faq">
        <Faq />
        <Underline />
      </div>

      <div id="timeline">
        <Timeline />
        <Underline />
      </div>

      <div id="prize">
        <Prices />
        <Underline />
      </div>

      <div id="sponsors">
        <Parnters />
        <Underline />
      </div>

      <div id="privacy">
        <Privacy />
        <Underline />
      </div>

    </main>
  )
}
