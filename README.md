# PR updater GitHub action

This action merges the recent changes from the base branch of the pull request.

## Inputs

### `token`

**Required** GitHub token (https://github.com/settings/tokens)

## Usage

Create a workflow in your repository (`.github/workflows/update.yml`):

```yaml
on:
  issue_comment:
    types: [created]
name: Automatic Update
jobs:
  update:
    name: Update
    if: ${{ github.event.issue.pull_request && contains(github.event.comment.body, '/update') }}
    runs-on: ubuntu-latest
    steps:
      - name: Run test action
        uses: psyipm/update-branch-action@v1.0.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
```

To trigger the workflow add `/update` comment in the PR.
