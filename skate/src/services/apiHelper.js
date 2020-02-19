import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp.data.user.id);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  localStorage.setItem('id', resp.data.user.id)
  console.log(resp.data.user.id)
  return resp.data.user;
}


export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    localStorage.setItem('id', resp.data.user.id)
    return resp.data.user;
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return { errorMessage: "Email is already associated with a user, please login to continue" }
    }
  }
}

export const indexSpots = async () => {
  const resp = await api.get('/spot');
  console.log(resp)
  return resp.data
}

export const singleSpots = async (id) => {
  const resp = await api.get(`/spot/${id}`);
  console.log(resp)
  return resp.data
}

export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

export const postSpot = async (spotInfo) => {
  const resp = await api.post('/spot', spotInfo)
  return resp.data
}

export const putSpot = async (id, postData) => {
  const resp = await api.put(`/spot/${id}`, postData);
  console.log(resp.data)
  const todo = { id: id, name: resp.data.data }
  console.log(todo)
  // return todo
}

export const deleteSpot = async (spotToDeleteId) => {
  await api.delete(`/spot/${spotToDeleteId}`);
}

export const commentDaSpot = async (id, comment) => {
  console.log(comment)
  const resp = await api.post(`/spot/${id}/comment`, comment)
  console.log(resp)
  return resp.data
}

export const getComments = async (id) => {
  const resp = await api.get(`/spot/${id}/comment`)
  console.log(resp)
  return resp.data
}

export const brooklynSpots = async () => {
  const resp = await api.get('/brooklyn');
  console.log(resp)
  return resp.data
}


export const manSpots = async () => {
  const resp = await api.get('/manhattan');
  console.log(resp)
  return resp.data
}

export const queenSpots = async () => {
  const resp = await api.get("/queens")
  console.log(resp)
  return resp.data
}

export const bxSpots = async () => {
  const resp = await api.get("/bronx")
  console.log(resp)
  return resp.data
}

export const statSpots = async () => {
  const resp = await api.get("/staten")
  return resp.data
}