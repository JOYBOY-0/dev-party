import { supabase } from '@/supabase/supabaseClient'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useUserContext } from './contexts/User.context'
import { AuthGuard } from './guard/AuthGuard'
import { PrivateRoutes, PublicRoutes } from './guard/routes'
import { RouteNotFound } from './utilities/RouteNotFound'
import { Home } from './views/Home/Home'
import Submit from './views/submit/Submit'
import Auth from './views/auth/Auth'

function App () {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed')
      if (session === null) {
        console.log('User is now null')
      } else {
        console.log('Found an active session')
      }
    })
  }, [])
  const { user } = useUserContext()
  console.log('User', user)
  return (
    <RouteNotFound>
      <Route path={PublicRoutes.AUTH} element={<Auth />} />
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.SUBMIT} element={<Submit />} />

      <Route element={<AuthGuard />}></Route>
    </RouteNotFound>
  )
}

export default App
