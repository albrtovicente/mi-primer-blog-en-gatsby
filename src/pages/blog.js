import * as React from 'react'


const Blog = function(){
  const nombre="Pepe"
  return <h1 className='text-center'>Esta será la página de mi blog {nombre}</h1>
}

export const Head = () => <title>Blog</title>

export default Blog
