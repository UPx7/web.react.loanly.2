export const environment = {
  baseUrl: 'https://api-nest-loanly-hk0k.onrender.com',
  keys: {
    token: 'TOKEN',
    user: 'USER',
  },
  routes: {
    auth: {
      login: '/users/login',
      signUp: '/users/signup',
    },
    dataModules: {
      base: '/data-modules',
      byId: '/data-modules/{id}',
    },
    equipments: {
      base: '/equipments',
      byId: '/equipments/{id}',
    },
    tenders: {
      base: '/tenders',
      byId: '/tenders/{id}',
    }
  }
}
