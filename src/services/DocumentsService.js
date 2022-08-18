// import { getUser } from '@/services/LoginService'
const BaseUrl = 'http://medical.awlyg.xyz/api'

export async function storeDocumentService (path, flag, dossierId) {
  const clientToken = localStorage.getItem('token')
  const formData = new FormData()
  formData.append('path', path)
  formData.append('flag', flag)
  formData.append('dossier_id', dossierId)
  const response = await fetch(BaseUrl + '/documents', {
    method: 'POST',
    headers: {
      Accept: '*/*',
      Authorization: 'Bearer ' + clientToken
    },
    body: formData
  })
  if (response.ok) {
    return response.json()
  }
}
