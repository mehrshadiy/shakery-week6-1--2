import { Inter } from 'next/font/google'
import {Weather} from "@/conponents/weather/Weather";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'flex justify-center items-center h-[100vh]'}>
      <Weather city={"tehran"}/>
    </main>
  )
}
