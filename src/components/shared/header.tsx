import { ThemeToggle } from '@components/theme-toggle'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import HomeButton from '../Homebutton'

export default function Header() {
  return (
    <header className="container sticky top-0 mx-auto my-2 flex justify-between  ">
      <HomeButton/>
      <ThemeToggle />
    </header>
  )
}
