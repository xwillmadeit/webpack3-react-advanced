export const getURLParameter = (name, url = window.location.search) => {
  if (!url) return

  const m = new RegExp(`${name}=([^&]*)`).exec(url.substring(1))

  if (!m) return

  return decodeURIComponent(m[1])
}

export const removeSearchParam = (name, search = window.location.search) => {
  if (typeof search !== 'string') return ''

  if (search[0] === '?') {
    search = search.substring(1)
  }

  search = search
    .split('&')
    .reduce((acc, pair) => {
      if (pair.split('=')[0] !== name) {
        acc.push(pair)
      }
      return acc
    }, [])
    .join('&')

  if (search.length > 0) {
    search = `?${search}`
  }

  return search
}
