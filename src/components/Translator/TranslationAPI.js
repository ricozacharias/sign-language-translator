export const TranslationAPI = {
    
    // add translation text to user translation history
    // input: translation data
    addTranslation(translate) {

        return fetch(`${window.JSON_DB_API_URL}/translations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...translate, deleted: false})
        }).then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })

    },

    // get translation texts from user history
    // order desc and optional limited
    // input: userId, limit of translations
    getTranslations(userId, limit = -1) {

        let url = `${window.JSON_DB_API_URL}/translations/?userid=${userId}&deleted=false&_sort=id&_order=desc`
        if (limit > 0)
        url+= `&_limit=${limit}`

        console.log(url)

        return fetch(url)
            .then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }

            return response.json()
        })
    },

    // mark single translation text as deleted 
    // input: id = translation-Id
    removeTranslation(id) {

        return fetch(`${window.JSON_DB_API_URL}/translations/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ deleted: true })
        })
        .then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    },    

    // mark all translation text for user as deleted
    // input: userId
    removeTranslations(userId) {
        let errors = []

        this.getTranslations(userId).then(translations => {
            translations.forEach(item => {
                this.removeTranslation(item.id)
                .catch(error => {
                    errors.push(error)
                })
            });
        })
        .catch(error => {
            errors.push(error)
        })

        return (errors.length === 0)
    }

}