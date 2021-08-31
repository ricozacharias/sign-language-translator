export const API_ERROR_INVALID_AUTH = 'INVALID_AUTH_TOKEN'


export const ApiUtil = {
    headers() {
        let token;
        const session = localStorage.getItem('session');
        if (session) {
            token = JSON.parse(session).token
        }

        return {
            'Content-Type': 'appliction/json',
            'Authorization': `Bearer ${token}`
        }
    },

    async handleFirstResponse(response) {
        if (response.status === 401) {
            throw new Error(API_ERROR_INVALID_AUTH)
        }

        if (!response.ok) {
            const { error = 'Unknown error occurred' } = await response.json()
            throw new Error(error)
        }

        return response.json()
    }
}