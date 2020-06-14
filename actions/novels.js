/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchNovels = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/novels`)

    return data
  } catch (error) {
    return []
  }
}
