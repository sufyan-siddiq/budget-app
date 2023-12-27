import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    // local states
    const [value, setValue] = useState(() => {

        // getItem from localStorage
        const johnValue = localStorage.getItem(key)

        if (johnValue !== null) return JSON.parse(johnValue)
        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })
    useEffect(() => {
        // setItem from localStorage
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
