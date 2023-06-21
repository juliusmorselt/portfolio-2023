import Head from 'next/head'
import Image from 'next/image'

import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
    </>
  )
}
