const { ChatGPTAPI } = require('@oceanlvr/chatgpt')

async function handlePullRequestOpenedAndSynchronized(context) {
  const pullRequest = context.payload.pull_request
  const compare = await context.octokit.repos.compareCommits({
    owner: context.payload.repository.owner.login,
    repo: context.payload.repository.name,
    base: pullRequest.base.sha,
    head: pullRequest.head.sha
  })
  const diffHunks = compare.data.files?.[0]?.patch
  if (!diffHunks) return

  const repo = await context.octokit.repos.get(context.repo())
  const lang = repo.data.language?.toLowerCase() || 'javascript'

  const gptClient = new ChatGPTAPI({ sessionToken: process.env.SESSION_TOKEN })

  gptClient.ensureAuth()

  const prompt = `Please review the following ${lang} code changes:\n\n${diffHunks}\n\n}`
  const response = await gptClient.sendMessage(prompt)

  const message = `Hi 🙏🏻 ${pullRequest.user.login}
  
  ### 🤖 AI Insights
  
  ${response}
  `

  await context.octokit.issues.createComment({
    ...context.repo(),
    issue_number: pullRequest.number,
    body: message
  })
}
