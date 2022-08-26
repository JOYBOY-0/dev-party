import { User } from '@/models'
import React, { createContext, useContext, useState } from 'react'

type UserContext = {
  user: User | null
  login: (user: User) => void
  logout: () => void
  update: (newUser: Partial<User>) => void
}
const userContext = createContext<UserContext>({
  user: null,
  login: () => {},
  logout: () => {},
  update: () => {}
})

const useUserContext = () => useContext(userContext)

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
