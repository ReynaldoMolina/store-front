async function sendData(fetchRegister, url, registerId) {
  console.log('sendData')
  let method, fetchUrl;
    
  if (!registerId) {
    fetchUrl = url;
    method = "POST";
  } else {
    fetchUrl = url + registerId;
    method = "PATCH";
  }

  const response = await fetch(fetchUrl, {
    method: method,
    body: JSON.stringify(fetchRegister),
    headers: {
      "Content-type": "application/json"
    }
  })
  const data = await response.json();
  
  console.log('sendata', data);
  return data;
}

export { sendData };