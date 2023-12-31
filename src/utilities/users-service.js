import * as usersAPI from './users-api'

export async function signUp(userData){
    // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token);

  return getUser();
}


export function getToken() {
    const token = localStorage.getItem('token')

    if(!token) return null;
try{
    const payload = JSON.parse(atob(token.split('.')[1]))
    //decrypting second positon aka payload

    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('token');
        return null
    }

    return token;
}catch(error){
    console.error('Error', error)
}
}

export function getUser(){
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut(){
    localStorage.removeItem('token')
}

export async function login(userData){
    console.log('Login userData:', userData)
    console.log(usersAPI)
    const token = await usersAPI.login(userData)
    localStorage.setItem('token', token);
    return getUser();
}

export function checkToken(){
    return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}