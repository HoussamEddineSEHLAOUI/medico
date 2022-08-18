const BaseUrl = 'http://medical.awlyg.xyz/api'
export async function loginService (email, password) {
  const response = await fetch(BaseUrl + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const { user, token } = await response.json()
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
  if (response.ok) {
    return true
  }
}
export async function registerService (firstname, lastname, datenaissance, email, password, phone, pays, ville) {
  const response = await fetch(BaseUrl + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      first_name: firstname,
      last_name: lastname,
      date_naissance: datenaissance,
      email: email,
      password: password,
      phone: phone,
      pays: pays,
      ville: ville
    })
  })
  const { user, token } = await response.json()
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
  if (response.ok) {
    return true
  }
}
export function isLoggedIn () {
  const clientToken = localStorage.getItem('token')
  if (clientToken) {
    return true
  } else {
    return false
  }
}
export function getUser () {
  if (localStorage.user) {
    return JSON.parse(localStorage.getItem('user'))
  } else {
    return null
  }
}
