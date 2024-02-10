import React from 'react'
import {IoLogoHtml5} from 'react-icons/io5'
import {IoLogoCss3} from 'react-icons/io'
import {RiJavascriptLine} from 'react-icons/ri'
import {IoAccessibilityOutline} from 'react-icons/io5'
import Link from 'next/link'

const Homepage = () => {
  const handleOnHtmlButtonClick = () => {}

  return (
    <div className='homepage_wrapper'>
      <div className='homepage'>
        <div className='homepage_left'>
          <div className='wlc_text'>Welcome to the</div>
          <h1>Frontend Quiz!</h1>
          <p>Pick a subject to get started</p>
        </div>
        <div className='homepage_right'>
          <Link
            href='/htmlquestionpage'
            target='_blank'
            className='subject_wrapper'
          >
            <div className='icon'>
              <IoLogoHtml5 />
            </div>
            <div className='subject'>HTML</div>
          </Link>
          <Link
            href='/cssquestionpage'
            target='_blank'
            className='subject_wrapper'
          >
            <div className='icon'>
              <IoLogoCss3 />
            </div>
            <div className='subject'>CSS</div>
          </Link>
          <Link
            href='/jsquestionpage'
            target='_blank'
            className='subject_wrapper'
          >
            <div className='icon'>
              <RiJavascriptLine />
            </div>
            <div className='subject'>Javascript</div>
          </Link>
          <Link
            href='/accessibility'
            target='_blank'
            className='subject_wrapper'
          >
            <div className='icon'>
              <IoAccessibilityOutline />
            </div>
            <div className='subject'>Accessibility</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
