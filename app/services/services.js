const environment = "0.0.0.0"
const port = 8000
const baseUrl = `http://${environment}:${port}`

axios.interceptors.request.use(request => {
    console.log('Starting Request...', request)
    return request
})

axios.interceptors.response.use(response => {
    console.log('Response:', response)
    return response
})

function healthService() {
    return axios.get(`${baseUrl}/api/health`)
}

function fibonacciService(request_body) {
    return axios.post(`${baseUrl}/api/fibonacci`, request_body)
}

export {
    healthService,
    fibonacciService
}