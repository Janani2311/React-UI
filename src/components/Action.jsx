import React from 'react'
import Emailform from './Emailform'

function Action() {
  return <>
   <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        {/* <!-- Signup form--> */}
                        <Emailform/>
                    </div>
                </div>
            </div>
        </section>
  
  </>
}

export default Action