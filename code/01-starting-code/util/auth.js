import axios from 'axios'

const API_KEY = 'AIzaSyA5ofLfXXC2aulvuQ7i78Ifbvai9_8p4fQ'

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  )
}
