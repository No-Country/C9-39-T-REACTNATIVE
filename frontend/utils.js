export const mockFetch = (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), miliseconds)
  })
}
