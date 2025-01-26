async function sendData(fetchRegister, registerId, url, id) {
  console.log('sendData')
  let method, fetchUrl;
    
  if (!registerId) {
    fetchUrl = url;
    method = "POST";
  } else {
    fetchUrl = url + id;
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