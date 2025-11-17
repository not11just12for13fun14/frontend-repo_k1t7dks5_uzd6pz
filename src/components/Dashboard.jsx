import { useEffect, useState } from 'react'
import { Plane, CreditCard, Car, ShoppingBag } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard({ token }) {
  const [activity, setActivity] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/activity?token=${token}`)
        const data = await res.json()
        setActivity(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    if (token) load()
  }, [token])

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold">Your Feed</h2>
        {loading ? (
          <p className="text-white/70 mt-4">Loading…</p>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activity.map((a, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  {a.category === 'travel' && <Plane className="w-5 h-5" />}
                  {a.category === 'payment' && <CreditCard className="w-5 h-5" />}
                  {a.category === 'cab' && <Car className="w-5 h-5" />}
                  {a.category === 'grocery' && <ShoppingBag className="w-5 h-5" />}
                  <div>
                    <p className="font-semibold">{a.title}</p>
                    {a.details && <p className="text-white/70 text-sm">{a.details}</p>}
                  </div>
                </div>
                {typeof a.amount === 'number' && (
                  <p className="mt-3 text-white/80 text-sm">Amount: ${a.amount.toFixed(2)}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
