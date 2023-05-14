export const getValueFromLocalStorage = (key: string, setValue: (value: number) => void) => {
    let stringValueFromLocalStorage = localStorage.getItem(key)
    if (stringValueFromLocalStorage) {
        let value = JSON.parse(stringValueFromLocalStorage)
        setValue(value)
    }
}