import { useUserContext } from '@/contexts/User.context'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from './routes'

export const AuthGuard: React.FC = () => {
  const { user } = useUserContext()
  console.log('entro', 'user', user)
  return user ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />
}
