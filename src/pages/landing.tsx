import { About } from "@/components/layout/about"
import { Banner } from "@/components/layout/banner"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { YetuEduHistory } from "@/components/layout/yetu-edu-history"
import { YetuEduJourney } from "@/components/layout/yetu-edu-journey"

export function Landing() {
  return (
    <main className='px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-16'>
      <Header />
      <Banner />
      <About />
      <YetuEduHistory />
      <YetuEduJourney />
      <Footer />
    </main>
  )
}
