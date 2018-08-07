export default {
  id: 1,
  nextId () {
    return this.id++
  },
  resetId () {
    this.id = 1
  }
}