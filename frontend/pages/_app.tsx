import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header/header'
import Head from 'next/head'

import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps)
{
  return (
    <>
      <NextSeo
        title='Julius Morselt'
        description='Hoi! Ik ben Julius, een frontend ontwikkelaar gevestigd Arnhem. Mijn passie ligt bij het bouwen van elegante en gebruiksvriendelijke websites. Ik streef ernaar om webinterfaces te creëren die zowel visueel aantrekkelijk als functioneel zijn, met oog voor een optimale gebruikerservaring. Ook ben ik bezig mijn kennis uit te breiden naar backend technologieën.'
      />
      <Head>
        <meta name="google-site-verification" content="N2fMtNV8qf38LyzbrKv2njRfCtYEOhwsNBEXzLIlkDg" />
      </Head>
      <Header />
      <main>
        <section className='container'>
          <h2>Page is currently under construction. Please stay put.</h2>
        </section>
      </main>
      {/* <Component {...pageProps} /> */}
    </>
  )
}
