export default async function checkLogin(){
  
  var token = "";
console.log("checkLogin");
  try {
    token = document.cookie.match("token=([^;]+)")[1];
  } catch(error) {
    console.log("Token is not in cookies")
    return 0
  }
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content=Type": "application/json",
        Authorization: `${token}`,
      },
    };
    const response = await fetch( `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/verify`, 
      requestOptions);
    if (!response.ok) {
      return 0;
    }
    return 1;
  } catch(error) {
    console.error(error);
    return 0;
  }
}
