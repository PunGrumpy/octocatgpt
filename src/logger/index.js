module.exports = app => {
  return {
    info: () => {
      app.log.info(`[Bot] ${this.name}`)
    }
  }
}
