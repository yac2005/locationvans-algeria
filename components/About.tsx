// components/About.tsx
import { Truck, Headset, HandCoins } from "lucide-react"
import { trustBullets } from "@/lib/data"

const icons = [Truck, Headset, HandCoins]

export default function About() {
  return (
    <section>
      {trustBullets.map((item, index) => {
        const Icon = icons[index]
        return (
          <div key={index}>
            {Icon && <Icon />}
            <p>{item.text}</p>
          </div>
        )
      })}
    </section>
  )
}