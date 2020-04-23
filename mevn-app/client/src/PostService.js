import axios from 'axios'

const url = '/api/posts/'

class PostService {
  static getPosts () {
    return axios.get(url).then(resp => {
      return resp.data
    })
    // return new Promise((resolve, reject) => {
    //   try {
    //     const resp = axios.get(url)
    //     const data = resp.data
    //     resolve(
    //       data
    //       // data.map(post => ({
    //       //   ...post
    //       // }))
    //     )
    //   } catch (error) {
    //     reject(error)
    //   }
    // })
  }

  static createPost (message) {
    return axios.post(url, {
      message
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  static deletePost (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService
