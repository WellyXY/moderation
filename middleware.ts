import { type NextRequest, NextResponse } from "next/server"
import { updateSession } from "./supabase/helpers/middleware"

export async function middleware(request: NextRequest) {
	const { response, supabase } = await updateSession(request)

	const { data: session } = await supabase.auth.getSession()
	console.log("Session:", session)
	if (!session.session?.user) {
		return NextResponse.redirect(`${request.nextUrl.origin}/login`)
	}

	return response
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
}
