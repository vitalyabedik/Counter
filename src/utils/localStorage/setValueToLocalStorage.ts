export const setValueToLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value))
}