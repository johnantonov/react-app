import { About } from '@/sections/about/About'
import { Hero } from '@/sections/hero/Hero'
import { Catalogue } from '@/sections/catalogue/Catalogue'
import { Materials } from '@/sections/materials/Materials'
import { MaterialsContextProvider } from '@/contexts/MaterialContext'
import { Special } from '@/sections/special/Special'
import { Subscribe } from '@/sections/subscribe/Subscribe'
import { Comments } from '@/sections/comments/Comments'
import { Production } from '@/sections/production/Production'
import { HowWeWork } from '@/sections/how/HowWeWork'
import { HeroSecond } from '@/sections/hero/HeroSecond'
import { Contacts } from '@/sections/contacts/Contacts'
import { QuizProvider } from '@/contexts/QuizContext'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Catalogue />
      <MaterialsContextProvider>
        <Materials />
      </MaterialsContextProvider>
      <Special />
      <Subscribe />
      <Comments />
      <Production />
      <HowWeWork />
      <QuizProvider>
        <HeroSecond />
      </QuizProvider>
      <Contacts />
    </main>
  )
}
