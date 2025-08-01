"use client"

import { createClient } from "@supabase/supabase-js"
import Link from "next/link"
import { useState } from "react"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const [message, setMessage] = useState("")

	const handlePasswordReset = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError("")
		setMessage("")

		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}/reset-password`,
			})

			if (error) {
				setError(error.message)
			} else {
				setMessage("Check your email for a password reset link!")
			}
		} catch {
			setError("An unexpected error occurred")
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-purple-300 to-purple-200 p-4">
			<div className="w-full max-w-md">
				{/* Logo/Brand */}
				<div className="mb-8 text-center">
					<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
							<div className="h-4 w-4 rounded-sm bg-black" />
						</div>
					</div>
					<h1 className="mb-2 font-bold text-2xl text-gray-900">
						Forgot password?
					</h1>
					<p className="text-gray-600">
						Enter your email to reset your password
					</p>
				</div>

				{/* Reset Form */}
				<div className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
					{error && (
						<div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4">
							<p className="text-red-600 text-sm">{error}</p>
						</div>
					)}

					{message && (
						<div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4">
							<p className="text-green-600 text-sm">{message}</p>
						</div>
					)}

					<form onSubmit={handlePasswordReset} className="space-y-6">
						<div>
							<input
								type="email"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
						</div>

						<button
							type="submit"
							disabled={loading}
							className="w-full rounded-2xl bg-black py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading
								? "Sending reset link..."
								: "Send reset link"}
						</button>
					</form>

					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Remember your password?{" "}
							<Link
								href="/login"
								className="font-medium text-purple-600 transition-colors hover:text-purple-700"
							>
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
