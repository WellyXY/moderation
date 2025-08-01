import { NextResponse } from "next/server"

import { createClient } from "@/supabase/helpers/server"

export async function GET(request: Request) {
	// The `/auth/callback` route is required for the server-side auth flow implemented
	// by the Auth Helpers package. It exchanges an auth code for the user's session.
	// https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange

	console.log(request, "request")
	const requestUrl = new URL(request.url)
	const code = requestUrl.searchParams.get("code")
	console.log(code, "auth")
	const error = requestUrl.searchParams.get("error")
	const error_description = requestUrl.searchParams.get("error_description")
	// URL to redirect to after sign in process completes
	const from = requestUrl.searchParams.get("from")
	const to = requestUrl.searchParams.get("to")

	if (code) {
		const supabase = await createClient()
		await supabase.auth.exchangeCodeForSession(code)

		const { data } = await supabase.auth.exchangeCodeForSession(code)
	} else if (error) {
		return NextResponse.redirect(
			from
				? `${requestUrl.origin}${from}?info=${
						error_description ||
						"Unable to sign in, please try again."
					}`
				: `${requestUrl.origin}/login?info=${
						error_description ||
						"Unable to sign in, please try again."
					}`,
		)
	}

	// URL to redirect to after sign in process completes
	return NextResponse.redirect(`${requestUrl.origin}${to || from || "/"}`)
}
