const { ChatGPTAPI } = require('@oceanlvr/chatgpt')

async function handleIssueOpened(context) {
  const issue = context.payload.issue
  const repo = context.repo()

  const gptClient = new ChatGPTAPI({ sessionToken: process.env.SESSION_TOKEN })

  gptClient.ensureAuth()

  const prompt = `Please provide insights on the following issue titled "${issue.title}" with details:\n\n${issue.body}\n\n`
  const response = await gptClient.sendMessage(prompt)

  const message = `Hi 🙏🏻 ${issue.uset.login}
  
  ### 🤖 AI Insights

  ${response}
  `

  await context.octokit.issues.createComment({
    ...repo,
    issue_number: issue.number,
    body: message
  })
}

module.exports = handleIssueOpened
