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
  return resp.data.user;
}


export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
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
  const resp = await api.post(`/spot/${id}/comment`, comment)
  console.log(resp)
  return resp.data
}