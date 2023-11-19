const baseUrl = 'http://localhost:3000';

export const get = async (url) => {
  const response = await fetch(baseUrl + url);
  return await response.json();
};

export const post = async (url, data) => {
  const response = await fetch(baseUrl + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const patch = async (url, data) => {
  const response = await fetch(baseUrl + url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const del = async (url) => {
  const response = await fetch(baseUrl + url, {
    method: 'DELETE',
  });
  return await response.json();
};
