export default {
  /**
   * @param state 数据存储区
   * @param city  传入的城市
   */
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
