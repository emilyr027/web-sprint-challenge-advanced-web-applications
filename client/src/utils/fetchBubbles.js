import axiosWithAuth from '../utils/axiosWithAuth'

export const fetchBubbles = (setColorList)=> {
    axiosWithAuth()
    .get('/colors')
    .then(response => {
      console.log(response);
      setColorList(response.data);
    })
    .catch(error => {
      console.log(error.response)
    })
}