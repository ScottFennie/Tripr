export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'tripr.us.auth0.com'
export const clientId = 'Jv4nlGPzkXbv9lMsGAExjdcYV1kTMezI'
export const audience = 'https://tripr.us.auth0.com/api/v2/'
