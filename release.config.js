export default {
  preset: 'conventionalcommits',
  branches: ['main', { name: 'next', prerelease: true }],
  extends: 'semantic-release-monorepo',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'pnpm version ${nextRelease.version} --git-tag-version=false --allow-same-version',
        publishCmd: 'pnpm pack',
      },
    ],
    // '@semantic-release/github',
  ],
  tagFormat: '${PACKAGE_NAME}@v{VERSION}',
};
