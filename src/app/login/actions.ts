'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
    console.log('signup pressed');
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Sign up error:', error.message);
    // Optionally, display this error to the user
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
export async function signout() {
    const supabase = createClient()
  
    // Perform sign-out
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      // Handle sign-out error if needed
      console.error('Sign out error:', error.message)
      // Optionally redirect to an error page or display a message
      redirect('/error')
    } else {
      // Redirect to login page after successful sign-out
      redirect('/login')
    }
  }