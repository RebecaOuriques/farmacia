import React from 'react'
import homeLogo from '../../assets/homeLogo.png'

const Home = () => {
  return (
    <>
      <div className='min-h-[75vh] bg-blue-300 grid grid-cols-2 flex justify-around'>

        <img src={homeLogo} alt='Logo da farmácia' className='col-span-1 w-[80vh] flex items-center ustify-center' />
        <div className='col-span-1 flex items-center flex-col justify-center w-[70vh]'>
          <p>1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quae iusto reiciendis necessitatibus temporibus laboriosam ducimus minus ab incidunt nisi! Aperiam minus sapiente possimus expedita praesentium architecto eligendi dolorem harum!</p>
          <p>2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur obcaecati aliquid in, repellat officiis fugit molestiae nam vitae molestias nobis reiciendis modi voluptatum totam iusto similique recusandae ex ipsum!</p>
          <p>3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur obcaecati aliquid in, repellat officiis fugit molestiae nam vitae molestias nobis reiciendis modi voluptatum totam iusto similique recusandae ex ipsum!</p>

        </div>
      </div>
    </>
  )
}

export default Home


/*  <h1 className='font-semibold text-purple-700 text-2xl flex justify-center'>    </h1>*/