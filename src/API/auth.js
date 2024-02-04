export async function loginUser({ login, password }) {
  
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      const error = await response.json();
      throw new Error(error.error);
    }
  }


export async function userRegistation({ login, name, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if(response.ok){
    const data = await response.json(); 
    
  } else {
    const error = await response.json()
    
    throw new Error(error.error)

  }
  
  
}
