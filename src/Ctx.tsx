import { createContext, useContext, useState, useEffect } from "react"

type ContextState = {
  username: null | string
  setUsername: (username: string | null) => void
}

const initial = {
  username: null,
  setUsername: () => {}
}

export const useUsername = () => {
  const { username, setUsername } = useContext(Ctx)
  const login = (token: string, user: any) => {
    localStorage.setItem("token", token)
    setUsername(user.username)
  }
  const logout = () => {
    localStorage.removeItem("token")
    setUsername(null)
  }
  return { username, login, logout }
}

const Ctx = createContext<ContextState>(initial)

export const Provider = ({ children }: Props) => {
  const [username, setUsername] = useState<null | string>(null)

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user") || "{}").username
    if (username) {
      setUsername(username)
    } else {
      setUsername(null)
    }
  }, [])

  const value = {
    username,
    setUsername
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
