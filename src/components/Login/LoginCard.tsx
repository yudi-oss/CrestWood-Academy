"use client";

import { useState } from "react";

type Role = "student" | "staff";

export default function LoginCard() {
  const [role, setRole] = useState<Role>("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      role,
      username,
      password,
    });
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Welcome Back
        </h2>

        <p className="mt-3 text-slate-500">
          Sign in to access your dashboard,
          assignments, attendance and grades.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
      >
        {/* Role Switch */}
        <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 rounded-lg py-2 font-medium transition ${
              role === "student"
                ? "bg-white shadow text-blue-600"
                : "text-slate-500"
            }`}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() => setRole("staff")}
            className={`flex-1 rounded-lg py-2 font-medium transition ${
              role === "staff"
                ? "bg-white shadow text-blue-600"
                : "text-slate-500"
            }`}
          >
            Staff
          </button>
        </div>

        {/* Username */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            placeholder="Enter username"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-6 flex justify-end">
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-slate-500">
        © 2026 Crestwood Academy
      </div>
    </div>
  );
}