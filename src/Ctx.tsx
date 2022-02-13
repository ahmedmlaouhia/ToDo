import { createContext, useContext, useState, useEffect } from "react"

type ContextState = {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean | null
  setIsAuthenticated: (isAuthenticated: boolean | null) => void
  isLoading: boolean | null
  setIsLoading: (isLoading: boolean | null) => void
}

const initial = {
  isLoading: null,
  setIsLoading: () => {},
  isAuthenticated: null,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {}
}

export const useAuthentication = () => {
  const { user, setUser } = useContext(Ctx)
  const { isAuthenticated, setIsAuthenticated } = useContext(Ctx)
  const { isLoading, setIsLoading } = useContext(Ctx)
  const login = (token: string, user: User) => {
    localStorage.setItem("token", token)
    setUser(user)
    setIsAuthenticated(true)
  }
  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    setIsAuthenticated(false)
  }
  return {
    user,
    login,
    logout,
    isAuthenticated,
    isLoading: isAuthenticated === null
  }
}

const Ctx = createContext<ContextState>(initial)

export const Provider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(null)
  const [user, setUser] = useState<null | User>(null)
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      setIsAuthenticated(false)
      setIsLoading(false)
    }
  }, [])
  const value = {
    isLoading,
    setIsLoading,
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

type User = {
  username: string
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
