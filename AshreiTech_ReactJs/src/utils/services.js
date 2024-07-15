import axios from "axios";

const URL = 'https://sma.edu-man.com/sm/api/';
// const URL = 'https://business.gos.pk/Feedback/api';

export const getMethod = async (method) => {
  try {
    const response = await axios.get(URL + method, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching service:', error);
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
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
        },
      });
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

export const codeError = (error) => {
  console.log("ERROR", error)
}

export function formatDate(date) {
  const today = new Date(date);
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export const ClientId = 164;



