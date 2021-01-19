/**
 * 补充 0
 * @param {Number} num
 */
export function __num (num) {
  return num < 10 ? '0' + num : num
}

/**
 * 时间格式转化
 * @param {Date} date
 */

export function __Time (date) {
  if (date === 0) return '-'
  const Y = date.getFullYear() // 年
  const m = __num(date.getMonth() + 1) // 月
  const d = __num(date.getDate()) // 日
  const h = __num(date.getHours()) // 时
  const i = __num(date.getMinutes()) // 分
  const s = __num(date.getSeconds()) // 秒
  return Y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
}

/**
 * 设置图片、文字水印
 * @param {string} str 字符串
 */
export const setWatermark = str => {
  const id = '1.23452384164.123412415'

  const oDiv = document.getElementById(id)

  if (oDiv) document.body.removeChild(oDiv)
  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '20px'
  div.style.left = '25px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth - 50 + 'px'
  div.style.height = document.documentElement.clientHeight - 50 + 'px'
  div.style.background = 'url(' + str + ') left 40% no-repeat'
  div.style.backgroundSize = '100%'
  document.body.appendChild(div)
  return id
}

/**
 * 水印实例
 */
export const watermark = {
  set: str => {
    window.requestAnimationFrame(() => {
      setWatermark(str)
    })
    window.onresize = () => {
      setWatermark(str)
    }
  }
}

/**
 * 将URL参数转化为对象形势
 * @param {String} params URL参数
 */

export function urlParams (params) {
  return new Promise(resolve => {
    const v = params.split('&').reduce((pre, cur) => {
      Reflect.set(pre, cur.split('=')[0], cur.split('=')[1])
      return pre
    }, Object.create(null))
    resolve(v)
  })
}

/**
 * 文件下载
 * @param {string} url
 * @returns {File}
 */

export function __DownLoad (href, name) {
  const a = document.createElement('a')
  if (name) a.setAttribute('download', name)
  if (href) a.setAttribute('href', href)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

/**
 * 生成 guid
 */
export function __guid () {
  return 'xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 更改树形结构的键名
 * @param {Object} ref 对象
 * @param {String} children 子节点名称
 * @param {Object} props 更改的键名映射 { oldKey: newKey }
 */
export function mapTree (ref, children = 'children', props = {}) {
  const vRef = Object.keys(props).reduce((pre, cur) => {
    return { ...pre, [props[cur]]: ref[cur] }
  }, {})
  return {
    ...vRef,
    children:
      Array.isArray(ref[children]) && ref[children].length > 0
        ? ref[children].map(i => mapTree(i, children, props))
        : null
  }
}

/**
 * 将以base64的url数据转换为Blob
 * @param {String} urlData 用url方式表示的base64数据
 */
export function mapToBlob (urlData) {
  const arr = urlData.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
