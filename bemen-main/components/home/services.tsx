"use client"

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white flex flex-col items-center justify-center min-h-[60vh]">
      <div className="flex gap-6">
        <a href="/login/cliente" className="professional-btn text-lg py-4 px-10">Login Cliente</a>
        <a href="/login/admin" className="professional-btn text-lg py-4 px-10">Login Admin</a>
      </div>
    </section>
  )
}
