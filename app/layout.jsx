import './globals.css';
import { Nanum_Myeongjo, Poppins, Inter } from 'next/font/google';

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
const inter = Inter({ subsets: ['latin'] });

import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${Nanum.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
