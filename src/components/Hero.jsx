import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            One app for Travel, Payments, Cabs, and Grocery
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Plan trips, book rides, shop essentials, and pay anywhere. Your life, organized.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#auth" className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-semibold shadow hover:opacity-90 transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition">
              Explore Features
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </section>
  );
}
