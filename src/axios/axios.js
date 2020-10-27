import axios from 'axios'

export default axios.create({
  baseURL: 'https://socservice-site.firebaseio.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})
