import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Weather} from "@/conponents/weather/Weather";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Weather/>
    </main>
  )
}
