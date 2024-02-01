import axios from 'axios'

export function getAllPosts() {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
}

export function getByPostId(postId: string) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.data)
}

export function addPost() {
  return axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.data)
}

export function updatePost() {
  return axios
    .put('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.data)
}

export function deletePost() {
  return axios
    .delete('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    })
    .then((res) => res.data)
}
