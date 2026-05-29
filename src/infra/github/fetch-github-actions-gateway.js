export class FetchGitHubActionsGateway {
  constructor({ token, fetchImpl }) {
    if (!token) {
      throw new Error('GitHub Actions token is required');
    }

    this.token = token;
    this.fetch = fetchImpl || ((url, options) => globalThis.fetch(url, options));
  }

  async dispatchWorkflow({ owner, repo, workflow, ref, inputs = {} }) {
    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`;

    const response = await this.fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this.token}`,
        accept: 'application/vnd.github+json',
        'content-type': 'application/json',
        'user-agent': 'kanau-songlist',
        'x-github-api-version': '2022-11-28',
      },
      body: JSON.stringify({ ref, inputs }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`GitHub Actions workflow_dispatch failed: HTTP ${response.status} ${text}`);
    }
  }
}
