import React from 'react'
import Emailform from './Emailform'

function Header() {
  return <>
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                           
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            <Emailform/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </>
}

export default Header