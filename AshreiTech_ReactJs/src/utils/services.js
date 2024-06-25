import axios from "axios";

const URL = 'http://172.30.36.11:4324/sm/api/';
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
  const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = date.getDate();
  const year = date.getFullYear();

  // Ensure month and day are two digits
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  return `${formattedMonth}/${formattedDay}/${year}`;
}



