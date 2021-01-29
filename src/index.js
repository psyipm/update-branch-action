const core = require('@actions/core');
const github = require('@actions/github');

const updateBranch = async () => {
  const token = core.getInput('token');
  const client = github.getOctokit(token)

  const payload = github.context.payload

  await client.pulls.updateBranch({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    pull_number: payload.issue.number
  })
}

updateBranch()
  .then(() => { console.log("success") })
  .catch((error) => { console.log("error", error) })
