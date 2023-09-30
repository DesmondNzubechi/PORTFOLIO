import './globals.css';
import { Nanum_Myeongjo, Poppins, Inter } from 'next/font/google';
import nzube from '../public/nzube.png';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-poppins'
})
const Nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-nanum',
})

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';

export const metadata = {
  title: 'NZUBECHUKWU DESMOND ABUGU',
  description: 'Desmond Nzubechukwu Personal portfolio website',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${Nanum.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
