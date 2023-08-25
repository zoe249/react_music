const setItem = (key: string, value: unknown) => {
  window.localStorage.setItem(key, value as string)
}

const getItem = (key: string): any => {
  const result: string | null = window.localStorage.getItem(key)
  return result
  // if (result) {
  //
  // } else {
  //   return null
  // }
}

export { setItem, getItem }
