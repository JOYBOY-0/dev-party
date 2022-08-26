import { supabase } from '@/supabase/supabaseClient'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useUserContext } from './contexts/User.context'
import { AuthGuard } from './guard/AuthGuard'
import { PrivateRoutes, PublicRoutes } from './guard/routes'
import { Resource } from './models'
import { RouteNotFound } from './utilities/RouteNotFound'
import Auth from './views/auth/Auth'

const exampleResource: Resource = {
  id: 'dsadq',
  name: 'Example Resource',
  description:
    'A short description about the app, the problem it solves and the benefits it provides to the user',
  image: 'https://picsum.photos/200',
  imageAlt: 'Example Resource',
  company: 'Example Company',
  companyUrl: 'https://example.com',
  tags: [
    { id: '1', name: 'Web App', image: 'saas' },
    { id: '2', name: 'Javascript', image: 'javascript' }
  ],
  url: 'https://example.com',
  category: {
    id: '1',
    name: 'Productivity',
    color: '#FCD34D',
    image: 'productivity'
  }
}
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

      {/* <Route path={PublicRoutes.REGISTER} element={<SignUp />} /> */}
      {/* <Route
        path='/'
        element={
          <div className='grid p-2 grid-rows-3 bg-slate-900 min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ResourceCard resource={exampleResource} />
          </div>
        }
      /> */}
      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.HOME} element={<>xd</>} />
      </Route>
    </RouteNotFound>
  )
}

export default App
