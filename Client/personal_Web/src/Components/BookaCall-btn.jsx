import React from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import { useContext } from 'react'

function BookaCall_btn({btn_name, width = '160px', height = '59px' }) {
  const {theme, themes} = useContext(ThemeContext);
  const secondaryColor = themes[theme].secondaryColor
  const buttonTextColor = themes[theme].buttonTextColor
  return (
    <div>
      <button className='flex justify-center rounded-md items-center gap-[5px] pt-{16px}, pb-{16px}, pl-{18px}, pr-{18px}' style={{ width: width, height: height, backgroundColor:secondaryColor}}>
        <div className='h-[24px] w-[24px]'><img src="src\assets\phoneIcon.png" alt="phoneIcon" /></div>
        <div className='font-manrope font-medium text-md' style={{color:buttonTextColor}}>{btn_name}</div>
      </button>
    </div>
  )
}

export default BookaCall_btn
