import React from 'react'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false)
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
