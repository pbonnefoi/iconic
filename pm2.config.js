module.exports = {
  apps: [
    {
      name: 'GQL',
      script: 'npm',
      args: 'run gql-start'
    },
    {
      name: 'crontab',
      script: 'npm',
      args: 'run cron-ping'
    }
  ]
}
