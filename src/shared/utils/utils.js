export function commonGet(url) {
    let token = localStorage.getItem('app-global-token')
    return fetch(process.env.REACT_APP_BACKEND_URL + url, {
        method: 'GET',
        headers: {
            'token': token
        }
    })
    .then(x => x.json())
}

export function commonPost(url,data){
    let token = localStorage.getItem('app-global-token')
    return fetch(process.env.REACT_APP_BACKEND_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        })
            .then(x => x.json())
}


export function commonPut(url,data){
    let token = localStorage.getItem('app-global-token')
    return fetch(process.env.REACT_APP_BACKEND_URL + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        })
            .then(x => x.json())
}


export function commonPatch(url,data){
    let token = localStorage.getItem('app-global-token')
    return fetch(process.env.REACT_APP_BACKEND_URL + url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        })
            .then(x => x.json())
}


export function commonDelete(url) {
    let token = localStorage.getItem('app-global-token')
    return fetch(process.env.REACT_APP_BACKEND_URL+url, {
        method: 'DELETE',
        headers: {
            'token': token
        }
    })
    .then(x => x.json())
}