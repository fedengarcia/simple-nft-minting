import Axios from 'axios'
import { RICK_AND_MORTY_API_URL } from '../CONSTANTS';
export const RickAndMortyAxios = Axios.create();

export const getCharacterList = async (params) => {
    return await RickAndMortyAxios.get(`${RICK_AND_MORTY_API_URL}/character`)
      .then(res => res.data)
      .catch(error => Promise.reject(error));
  }




// export const deleteBook = async (bookId, userId) => {
//   return await XboingAxios.delete(`${XBOING_URI_API}/books/${bookId}?user_id=${userId}`)
//     .then(res => res)
//     .catch(error => {
//       Promise.reject(error)
//     })
// }

// export const createBook = async (userId,bookName,authorName, language, bookFile) => {
//   const bodyFormData = new FormData();
//   bodyFormData.append('user_id', userId)
//   bodyFormData.append('name', bookName)
//   bodyFormData.append('author_name', authorName)
//   bodyFormData.append('language', language)
//   bodyFormData.append('file', bookFile)
  
//   const options = {
//     method: 'POST',
//     headers: {},
//   }

//   return await XboingAxios.post(`${XBOING_URI_API}/books`,bodyFormData,options)
//     .then(res => res)
//     .catch(error => {
//       Promise.reject(error)
//     })
// }

// export const getBookList = async (userId) => {
//   return await XboingAxios.get(`${XBOING_URI_API}/books?user_id=${userId}`)
//     .then(res => res.data)
//     .catch(error => Promise.reject(error));
// }