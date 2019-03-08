/**
 * 数据存储区域
 * 首先读取localStorage
 * 若为空哲设置广州
 */
let defaultCity = '广州'
try {
  if (localStorage.city) defaultCity = localStorage.city
} catch (e) {}

export default {
  city: defaultCity
}
