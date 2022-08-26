import { User } from '@/models'
import React, { createContext, useContext, useState } from 'react'

export type UserContext = {
  user: User | null
  login: (user: User) => void
  logout: () => void
  update: (newUser: Partial<User>) => void
}
const userContext = createContext<UserContext | null>(null)

const useUserContext = () => useContext(userContext) as UserContext

type Props = {
  children: React.ReactNode
}

function UserProvider ({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  function login (user: User) {
    setUser(user)
  }
  function logout () {
    setUser(null)
  }
  function update (newUser: Partial<User>) {
    setUser(prevUser => ({
      ...(prevUser as User),
      ...newUser
    }))
  }

  return (
    <userContext.Provider
      value={{
        user,
        login,
        logout,
        update
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export { userContext, UserProvider, useUserContext }
