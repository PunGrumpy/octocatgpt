const logger = require('./src/logger/index')
const handleIssueOpened = require('./src/handlers/issuesHandler')
const handlePullRequestOpenedAndSynchronized = require('./src/handlers/pullRequestHandler')

module.exports = app => {
  logger(app).info('[Bot] OctoCatBot is running!')

  app.on('issues.opened', handleIssueOpened)
  app.on('pull_request.opened', handlePullRequestOpenedAndSynchronized)
  app.on('pull_request.synchronize', handlePullRequestOpenedAndSynchronized)
}
