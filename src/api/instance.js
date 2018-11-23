
/**
 * 
 * @param url 请求url
 * @param type 请求类型
 */
export function get(url, body, type) {
    if (typeof url !== 'string') {
        return;
    }

    if (!type) {
        type = 'application/json';
    }

    const headers = { 'Content-Type': type };

    let _url = '';

    if (!!body && typeof body === 'object') {
        for (let i in body) {
            _url += `${i}=${body[i]}&`;
        }
        url = `${url}?${_url}`.substring(0, `${url}?${_url}`.length - 1);
    }

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers
        }).then(
            response => {
                resolve(response.json());
            },
            error => {
                reject(error);
            }
        )
    })
}

/**
 * 
 * @param url 请求url
 * @param type 请求类型
 * @param body 传递参数
 */
export function post(url, body, type) {
    if (typeof url !== 'string') {
        return;
    }

    if (!type) {
        type = 'application/json';
    }

    const headers = { 'Content-Type': type };

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(
            response => {
                resolve(response.json());
            },
            err => {
                reject(err);
            }
        )
    })
}
