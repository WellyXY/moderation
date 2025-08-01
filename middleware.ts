import { type NextRequest, NextResponse } from "next/server"
import { updateSession } from "./supabase/helpers/middleware"

const entryPaths = ["login", "signup", "forgot-password", "reset-password"]

export async function middleware(request: NextRequest) {
	const { response, supabase } = await updateSession(request)

	const { data: session } = await supabase.auth.getSession()

	if (
		!session.session?.user &&
		!entryPaths.includes(request.nextUrl.pathname.split("/")[1])
	) {
		return NextResponse.redirect(`${request.nextUrl.origin}/login`)
	}

	return response
}

export const config = {
	matcher: [
		"/((?!api/..*|_next/static|_next/image|favicon.ico|auth/callback|auth/redirect|auth/confirm|videos|images|robots|.well-known/apple-app-site-association).*)",
	],
}
