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
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  // const year = date.getFullYear();
  // const formattedMonth = month.toString().padStart(2, '0');
  // const formattedDay = day.toString().padStart(2, '0');
  // return `${formattedMonth}/${formattedDay}/${year}`;

  // const today = new Date();
  // const formattedDate = `${String(today.getFullYear())}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  // return formattedDate;

  const today = date;
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}



