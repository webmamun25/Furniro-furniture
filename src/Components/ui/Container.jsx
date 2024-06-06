import React from 'react'

// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return (
    <div className='max-w-[1250px] mx-auto'>
        {children}
    </div>
  )
}

export default Container