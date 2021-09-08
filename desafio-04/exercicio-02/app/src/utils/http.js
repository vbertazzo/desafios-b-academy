const request = (url, options) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => {
      if (e.message === 'Failed to fetch') {
        return {
          error: true,
          message:
            'Não foi possível conectar ao servidor, Por favor, tente novamente em breve'
        }
      }

      return { error: true, message: e.message }
    })

const createRequest = method => (url, data) =>
  request(url, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

export const get = request
export const post = createRequest('POST')
export const del = createRequest('DELETE')
