import { supabase } from '@/supabase/supabaseClient'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { PublicRoutes } from './guard/routes'
import { RouteNotFound } from './utilities/RouteNotFound'
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
  return (
    <RouteNotFound>
      {/* <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} /> */}
      <Route path={PublicRoutes.AUTH} element={<Auth />} />

      {/* <Route path={PublicRoutes.REGISTER} element={<SignUp />} /> */}

      {/* <Route element={<AuthGuard />}>
            <Route exact path={PrivateRoutes.HOME} element={<Home />} />
            
          </Route> */}
    </RouteNotFound>
  )
}

export default App
