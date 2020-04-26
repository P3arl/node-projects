import axios from 'axios'

const url = '/api/notes/'

class NotesService {
  static getNotes () {
    return axios.get(url).then(resp => {
      return resp.data.map(note => ({
        ...note,
        createdAt: new Date(note.createdAt),
        modifiedAt: new Date(note.modifiedAt),
        editing: false
      }))
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

  static createNote (note) {
    return axios.post(url, {
      note
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  static editNote (note, id) {
    return axios.put(url, {
      note,
      id
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  static deleteNote (id) {
    return axios.delete(`${url}${id}`)
  }
}

export default NotesService
