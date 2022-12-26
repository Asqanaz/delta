import React from 'react'
import {TfiMenuAlt} from 'react-icons/tfi'
import { RiSearch2Line } from 'react-icons/ri'

export const Searchbar = () => {
  return (
    <label className='w-1/2 p-4 flex items-center justify-between bg-searchBar rounded-xl'>
        <RiSearch2Line size = "25" className='text-primary'/>
        <input type="search" placeholder = "Search essentials, groceries and more..." className='w-full ml-4 bg-transparent'/>
        <TfiMenuAlt size = "25" className='text-primary'/>
    </label>
  )
}
