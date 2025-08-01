"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createClient } from "@/supabase/helpers/client"

export default function LoginPage() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const router = useRouter()

	const supabase = createClient()

	const handleEmailLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError("")

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			})

			if (error) {
				setError(error.message)
			} else {
				router.push("/")
			}
		} catch {
			setError("An unexpected error occurred")
		} finally {
			setLoading(false)
		}
	}

	const handleGoogleLogin = async () => {
		setLoading(true)
		setError("")

		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${document.location.origin}/api/auth/callback`,
				},
			})

			if (error) {
				setError(error.message)
				setLoading(false)
			}
		} catch {
			setError("An unexpected error occurred")
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
						Welcome back
					</h1>
					<p className="text-gray-600">Sign in to your account</p>
				</div>

				{/* Login Form */}
				<div className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
					{error && (
						<div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4">
							<p className="text-red-600 text-sm">{error}</p>
						</div>
					)}

					<form onSubmit={handleEmailLogin} className="space-y-6">
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

						<div>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
						</div>

						<div className="flex justify-end">
							<Link
								href="/forgot-password"
								className="text-purple-600 text-sm transition-colors hover:text-purple-700 hover:underline"
							>
								Forgot password?
							</Link>
						</div>

						<button
							type="submit"
							disabled={loading}
							className="w-full rounded-2xl bg-black py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{loading ? "Signing in..." : "Sign in"}
						</button>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-gray-200 border-t" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="rounded-sm bg-white px-4 py-1 text-gray-500">
									Or continue with
								</span>
							</div>
						</div>

						<button
							type="button"
							onClick={handleGoogleLogin}
							disabled={loading}
							className="mt-8 flex w-full cursor-pointer items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-4 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Continue with Google
						</button>
					</div>

					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Don't have an account?{" "}
							<Link
								href="/signup"
								className="font-medium text-purple-600 transition-colors hover:text-purple-700"
							>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
