import Head from 'next/head'
import { useState } from 'react'
import About from '../Components/About/About'
import NavBar from "../Components/NavBar/NavBar"
import PrincipalPage from '../Components/PrincipalPage/PrincipalPage'
import Skills from '../Components/Skills/Skills'

export default function Home() {
  const [nav, setNav] = useState(false)
  return (
    <>
      <Head>
        <title>Ivix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <NavBar nav={nav} setNav={setNav}/>
          <PrincipalPage/>
          {/* <About/> */}
          <Skills/>
        </div>
      </main>
    </>
  )
}
