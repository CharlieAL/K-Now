import {
  CREDENTIALS_KEY_WEB,
  CREDENTIALS_KEY_ANDROID,
  CREDENTIALS_KEY_IOS
} from '@env'
import React, { createContext, useContext } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect, useState } from 'react'

const AuthContext = createContext({})
WebBrowser.maybeCompleteAuthSession()

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  // login with google
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CREDENTIALS_KEY_WEB,
    iosClientId: CREDENTIALS_KEY_IOS,
    androidClientId: CREDENTIALS_KEY_ANDROID
  })
  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response?.authentication.accessToken)
    }
  }, [response])
  useEffect(() => {
    if (accessToken) {
      getUserGoogle()
    }
  }, [accessToken])

  async function getUserGoogle() {
    const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    const data = await response.json()
    setUser(data)
  }
  // end login with google
  // esto es para no tener que hacer un build del proyecto cada vez que se haga un cambio
  function getUser(usuario) {
    setUser(usuario)
  }
  return (
    <AuthContext.Provider
      value={{
        user: user,
        promptAsync,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
