"use client"

import React from "react"

interface HeaderProps {
	currentUser: { username: string; userId: string } | null
	onLogout: () => void
}

export default function Header({ currentUser, onLogout }: HeaderProps) {
	return (
		<header className="border-gray-200 border-b bg-white px-6 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					<div className="flex items-center space-x-3">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600">
							<span className="font-bold text-lg text-white">
								🛡️
							</span>
						</div>
						<h1 className="font-bold text-2xl text-gray-900">
							Moderation System
						</h1>
					</div>
					<div className="hidden items-center space-x-2 text-gray-500 text-sm md:flex">
						<span>Recommendation Algorithm Management System</span>
					</div>
				</div>

				<div className="flex items-center space-x-4">
					<button
						type="button"
						className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
					>
						🔔
					</button>

					<button
						type="button"
						className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
					>
						⚙️
					</button>

					<div className="flex items-center space-x-3">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
							<span className="text-sm text-white">👤</span>
						</div>
						<div className="flex flex-col">
							<span className="font-medium text-gray-700 text-sm">
								{currentUser?.username || "Admin"}
							</span>
							<span className="text-gray-500 text-xs">
								ID: {currentUser?.userId || "N/A"}
							</span>
						</div>
						<button
							type="button"
							onClick={onLogout}
							className="ml-2 rounded-lg px-3 py-1 text-red-600 text-sm transition-colors hover:bg-red-50 hover:text-red-700"
							title="Logout"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
