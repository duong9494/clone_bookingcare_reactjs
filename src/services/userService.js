import axios from '../axios'

const handleLoginApi = (email, password) => {
  return axios.post('/api/login', {email, password})
}

const getAllUsers = (inputId) => {
  //template string
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
  console.log('check data from service: ', data)
  return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
  // return axios.delete('/api/delete-user', {id: userId})
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })
}

const editUserService = (inputData) => {
  return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputype) => {
  return axios.get(`/api/allcode?type=${inputype}`)
}

export { handleLoginApi, getAllUsers,
  deleteUserService, editUserService,
  createNewUserService, getAllCodeService
}