import { Josefin_Sans, Lato  } from 'next/font/google'

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-josefin-sans",
})

export const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lato',
  })
  