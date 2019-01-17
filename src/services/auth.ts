export function getAuthToken(endpoint: string, authData) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(authData),
  })
  .then((res) => res.json());
}

export function login(authData) {
  return getAuthToken('//localhost:8000/api/login', authData)
  .then((data) => (
    {...data}
  ))
  .catch((err) => {
    throw Error(err);
  });
}
