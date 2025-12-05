"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 font-sans text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-lg bg-[#232831] p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center">About Page</h1>
        </div>

        <div className="rounded-lg bg-[#232831] p-8 shadow-lg">
          <p className="mb-6 text-center text-lg text-gray-300">
            Hello my name is Ralen Matti Casiano, Welcome to my landing page. I
            am 20 years old and currently a student in Gordon College studying
            Bachelors of Science in Information Technologies. I am now a 3rd
            year student. My techstack is VueJS, PHP, and MySQL and I focus on
            back-end development and back-end architecture.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-block transition-transform hover:scale-105"
              >
                <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800">
                  Return
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
