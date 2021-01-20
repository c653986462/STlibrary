
/**
 * 本地化存储
 * @param {string} name 
 * @param {any} content 
 */
export const setLocalStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 本地化获取
 * @param {string} name 
 */
export const getLocalStore = (name) => {
    if (!name) return
    return window.localStorage.getItem(name)
}

/**
 * 本地化删除
 * @param {string} name 
 */
export const removeLocalStore = (name) => {
    if (!name) return
    return window.localStorage.removeItem(name)
}