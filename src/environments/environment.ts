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
    equipments: {
      base: '/equipments',
      byId: '/equipments/{id}',
    },
    tenders: {
      base: '/tenders',
    }
  }
}
