import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Image Section */}
        <div className="relative hidden lg:block overflow-hidden">
          <Image
            src="/Images/hero.png"
            alt="Crestwood Academy"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Login Section */}
        <div className="flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            
            {/* Logo / School Name */}
            <div className="mb-16">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                Crestwood Academy
              </p>

              <div className="mt-4 h-px w-20 bg-black" />
            </div>

            {/* Heading */}
            <div className="mb-12">
              <h1 className="text-5xl font-light text-gray-900">
                Sign In
              </h1>

              <p className="mt-4 text-gray-500">
                Access your student dashboard and academic services.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8">
              <div>
                <label className="mb-2 block text-sm text-gray-600">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-600">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-3 text-gray-900 outline-none transition focus:border-black"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-gray-500 hover:text-black"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-black py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-gray-800"
              >
                Continue
              </button>
            </form>

            {/* Footer */}
            <div className="mt-20 border-t border-gray-200 pt-6">
              <p className="text-xs text-gray-400">
                © 2026 Crestwood Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}