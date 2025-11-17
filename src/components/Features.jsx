import { Plane, CreditCard, Car, ShoppingCart, Activity } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Plane, title: 'Travel', desc: 'Search, compare, and book flights in minutes.' },
    { icon: Car, title: 'Cabs', desc: 'Quick ride booking with real-time pricing.' },
    { icon: ShoppingCart, title: 'Grocery', desc: 'Order essentials with fast doorstep delivery.' },
    { icon: CreditCard, title: 'Payments', desc: 'Tap to pay, split bills, and manage cards.' },
  ]
  return (
    <section id="features" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
              <Icon className="w-6 h-6" />
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
