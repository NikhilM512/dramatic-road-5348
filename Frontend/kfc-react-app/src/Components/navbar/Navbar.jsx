import React from 'react'
import {Link} from "react-router-dom"
import{Image,Show} from "@chakra-ui/react"

const navbar = () => {
  return (
    <>
    <div className='nav_main'>

    <div className="left_side">
          <Link to="/">
            <Image className="logo_img" src="/" alt="" />
          </Link>
          <Show breakpoint="(min-width: 680px)">
            <b>
              <Link className="link" >
                Menu
              </Link>
            </b>
            <b>
              <Link className="link">
                Deals
              </Link>
            </b>
          </Show>
        </div>
    
    </div>
      
    </>
  )
}

export default navbar
