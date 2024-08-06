import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // First, update the session as before
  const res = await updateSession(request)
  
  // Check if the userID cookie is present
  const userIdCookie = request.cookies.get('userID')
  
  // Get the current pathname
  const pathname = request.nextUrl.pathname
  
  // Check if the current page is the login page
  const isLoginPage = pathname === '/login'
  
  // Log for debugging
  console.log('Middleware executed. Path:', pathname, 'UserID Cookie:', userIdCookie ? 'Present' : 'Not Present')

  // If there's no userID cookie and the user isn't on the login page, redirect to login
  if (!userIdCookie && !isLoginPage) {
    console.log('Redirecting to /login')
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // If there is a userID cookie and the user is on the login page, redirect to home
  if (userIdCookie && isLoginPage) {
    console.log('Redirecting to /')
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  console.log('Proceeding with the request')
  // For all other cases, return the result of updateSession
  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}