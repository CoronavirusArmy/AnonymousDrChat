import Environment from '../Environment'

class Auth {
    async login(username, password) {
        let method = 'POST'
        let headers = { 'Content-Type': 'application/json' }
        const response = await fetch(`${Environment.apiUrls.loginUrl}`,
            {method, headers, body: JSON.stringify({'username': username, 'password': password})})

        if (!response.ok) throw Error(`${response.status}: ${response.statusText}`);
        return response.json()
    }
}

export default new Auth()