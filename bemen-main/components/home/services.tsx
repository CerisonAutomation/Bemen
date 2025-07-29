"use client";

import React from "react";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pearl to-pure-white flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="gradient-text">Our Services</h1>
      <p className="text-deep-black">
        We offer a variety of services to cater to your needs.
      </p>
      <div className="flex gap-6">
        <a
          href="/login/cliente"
          className="professional-btn text-lg py-4 px-10"
        >
          Login Cliente
        </a>
        <a href="/login/admin" className="professional-btn text-lg py-4 px-10">
          Login Admin
        </a>
      </div>
      <div className="elegant-card">
        {/* Card content goes here */}
      </div>
    </section>
  );
}
