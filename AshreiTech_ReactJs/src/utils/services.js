import axios from "axios";

const URL = 'https://sma.edu-man.com/sm/api/';
// const URL = 'https://business.gos.pk/Feedback/api';

export const getService = async (method) => {
  const response = await axios.get(URL + method)
  return response.data
}

export const getMethod = async (method) => {
  try {
    const response = await axios.get(URL + method, {
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDAxMTIyODQ3Iiwic2Vzc2lvbmlkIjoiMjUzMjQ1NCIsInJvbGVpZCI6IjQ2NjgxIiwiY2xpZW50aWQiOiIxNjQiLCJpc3MiOiJodHRwOi8vdG9rZW5pc3N1ZXIuaXhzLmNvbSIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNzE4OTY2MzEwLCJuYmYiOjE3MTg4Nzk5MTB9.BezcpBSp4Z00xCSrtG9igFghPC7CecGJe0z7I0lOxa4`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching service:', error);
  }
};

export const PostFile = async (method, data) => {
  try {
    const response = await axios.post(
      URL + method,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Optionally re-throw the error to be handled by the caller
  }
};

export const PostMethod = async (method, data) => {
  try {
    const response = await axios.post(
      URL + method,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDAxMTIyODQ3Iiwic2Vzc2lvbmlkIjoiMjUzMjQ1NCIsInJvbGVpZCI6IjQ2NjgxIiwiY2xpZW50aWQiOiIxNjQiLCJpc3MiOiJodHRwOi8vdG9rZW5pc3N1ZXIuaXhzLmNvbSIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNzE4OTY2MzEwLCJuYmYiOjE3MTg4Nzk5MTB9.BezcpBSp4Z00xCSrtG9igFghPC7CecGJe0z7I0lOxa4`
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

export const base64ToImg = (image) => {
  if (!image) {
    return
  }
  return `data:image/png;base64,${image}`
}
export const base64ToVideo = (base64Video) => {
  if (!base64Video) {
    return
  }
  return `data:video/mp4;base64,${base64Video}`
}

export const codeError = (error) => {
  console.log("ERROR", error)
}


