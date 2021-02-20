module.exports = {
  routes: './src/routes.ts',
  connector: '@xdn/starter',
  backends: {
    origin: {
      domainOrIp: 'krakash.xyz',
      hostHeader: 'krakash.xyz',
    },
  },
}
