// import faker  from "faker";

// export  async function signUpFactory() {
//   return {
//     email:  faker.internet.email(),
//     password: faker.internet.password(),
//     samePassword:  faker.internet.password()
//   }
// }

// export  async function signInFactory() {
//   return {
//     email:  faker.internet.email(),
//     password: faker.internet.password()
//   }
// }

export  async function signUpFactory() {
  return {
    email:  'ola@email.com',
    password: 'ola',
    samePassword:  'ola'
  }
}

export  async function signInFactory() {
  return {
    email:  'ola@email.com',
    password: 'ola'
  }
}