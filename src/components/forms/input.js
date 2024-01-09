import React from 'react'

const Input = ({rightIcon, padding}) => {
  return (
    <div className={`flex items-center space-x-2 w-full px-2 bg-transparent ${padding && padding} border border-mv-white h-3/4 rounded-xl`}>
        <input
          type="text"
          className ={`form-input w-full px-3 py-1.5 
          text-base font-normal text-mv-white 
          bg-mv-transparent border-none rounded transition ease-in-out m-0 
          outline-0 focus:ring-0 ring-0 focus:text-mv-white
          placeholder:text-mv-white
          focus:bg-0 focus:border-0 focus:outline-0`}
          placeholder="What do you want to watch?"
        />
        {rightIcon}
    </div>
  )
}

export default Input
