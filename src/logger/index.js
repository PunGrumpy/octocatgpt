module.exports = app => {
  return {
    info: message => {
      app.log.info(message)
    }
  }
}
