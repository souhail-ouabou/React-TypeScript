import { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}

//createContext accept initial value
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}
