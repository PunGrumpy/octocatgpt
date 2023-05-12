const handleIssueOpened = require('./handlers/issuesHandler')
const handlePullRequestOpenedAndSynchronized = require('./handlers/pullRequestHandler')
const logger = require('./logger')

module.exports = app => {
  logger(app).info(`App is running on ${process.env.NODE_ENV} mode`)

  app.on('issues.opened', handleIssueOpened)
  app.on('pull_request.opened', handlePullRequestOpenedAndSynchronized)
  app.on('pull_request.synchronize', handlePullRequestOpenedAndSynchronized)
}
