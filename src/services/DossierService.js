// import { getUser } from '@/services/LoginService'
const BaseUrl = 'http://medical.awlyg.xyz/api'
export async function getDossierService () {
  const clientToken = localStorage.getItem('token')
  // const userId = getUser().id
  console.log(clientToken)
  const response = await fetch(BaseUrl + '/user/folders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + clientToken
    }
  })
  if (response.ok) {
    return response.json()
  }
}

export async function storeDossierService (symptomes, ilinessstartdate, moredetail, spcialite) {
  const clientToken = localStorage.getItem('token')
  const response = await fetch(BaseUrl + '/folders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + clientToken
    },
    body: JSON.stringify({
      status: 'new',
      symptomes: symptomes,
      iliness_start_date: ilinessstartdate,
      more_detail: moredetail,
      spcialite: spcialite
    })
  })
  if (response.ok) {
    return response.json()
  }
}
