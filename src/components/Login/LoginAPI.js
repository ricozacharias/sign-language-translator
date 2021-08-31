export const LoginAPI = {
    // "login" with name - no password required
    // if user is unknown a new user will be created
    // input: credentials
    login(credentials) {

        let api = `${window.JSON_DB_API_URL}/users?username=${credentials.username}`

        return fetch(api)
        .then(async(response) => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()        
        })
        .then(response => {
            let user = {}

            // if user is unknown
            if (response.length !== 1) {
                // create new user
                return this.register(credentials.username)
                        .then(user => {
                            return { ...user, 'token': Math.random().toString(24).slice(2) };
                        })
                        .catch(error => {
                            throw new Error(error)
                        })
            }
            else { // otherwise return existing user
                user = response[0]
                return { ...user, 'token': Math.random().toString(24).slice(2) }
            }
            
        })
    },
    // create new user
    register(username) {
        return fetch(`${window.JSON_DB_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username})
        }).then(response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = response.json()
                throw new Error(error)
            }
            return response.json()
        })
    }
}