import { cookies } from 'next/headers'

export function getSessionUser() {
  const cookieStore = cookies()
  const userCookie = cookieStore.get('user')
  return userCookie ? JSON.parse(userCookie.value) : null
}