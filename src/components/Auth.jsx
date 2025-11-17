import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Auth({ onAuthed }) {
  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const requestOtp = async () => {
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${API}/auth/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to request OTP')
      setStep('code')
      setMessage(`Demo OTP: ${data.code}`)
    } catch (e) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  const verifyOtp = async () => {
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${API}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Verification failed')
      setToken(data.token)
      onAuthed?.(data.token)
    } catch (e) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-2xl font-bold">Login with OTP</h2>
        <p className="text-white/70 mt-1">No passwords. Just your phone.</p>

        {step === 'phone' && (
          <div className="mt-6 space-y-4">
            <input
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              onClick={requestOtp}
              disabled={loading || !phone}
              className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-semibold disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send OTP'}
            </button>
          </div>
        )}

        {step === 'code' && (
          <div className="mt-6 space-y-4">
            <input
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none"
              placeholder="Enter OTP"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              disabled={loading || !code}
              className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-semibold disabled:opacity-60"
            >
              {loading ? 'Verifying…' : 'Verify & Continue'}
            </button>
          </div>
        )}

        {message && <p className="mt-4 text-sm text-amber-300">{message}</p>}
      </div>
    </section>
  )
}
