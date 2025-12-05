"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 font-sans text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-lg bg-[#232831] p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center">Contact Page</h1>
        </div>

        <div className="rounded-lg bg-[#232831] p-8 shadow-lg">
          <p className="mb-6 text-center text-lg text-gray-300">
            Hello, you can contact me on the following socials:
          </p>

          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <h3 className="text-xl font-semibold">GitHub:</h3>
              <Link
                href="https://github.com/"
                target="_blank"
                className="inline-block transition-transform hover:scale-105"
              >
                <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800">
                  Visit GitHub Profile
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <h3 className="text-xl font-semibold">Email:</h3>
              <Link
                href="Rusiann7@protonmail.com"
                className="inline-block transition-transform hover:scale-105"
              >
                <button
                  onClick={() => {
                    alert("Email: Rusiann7@protonmail.com");
                  }}
                  className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700 hover:scale-105"
                >
                  Email
                </button>
              </Link>
            </div>
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
    </div>
  );
}
