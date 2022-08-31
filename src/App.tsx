import { supabase } from '@/supabase/supabaseClient'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useUserContext } from './contexts/User.context'
import { AuthGuard } from './guard/AuthGuard'
import { PrivateRoutes, PublicRoutes } from './guard/routes'
import { RouteNotFound } from './utilities/RouteNotFound'
import Auth from './views/auth/Auth'
import { Home } from './views/Home/Home'

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
      {/* <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} /> */}
      <Route path={PublicRoutes.AUTH} element={<Auth />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      {/* <Route path={PublicRoutes.REGISTER} element={<SignUp />} /> */}
      {/* <Route
        path='/'
        element={
          <div className='grid p-2 grid-rows-3 bg-slate-900 min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ResourceCard resource={exampleResource} />
          </div>
        }
      /> */}
      <Route element={<AuthGuard />}></Route>
    </RouteNotFound>
  )
}

export default App
