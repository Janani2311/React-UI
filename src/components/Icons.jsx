import React from 'react'

function Icons({iconData}) {
  return <>
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {iconData.map((e,i) => {
                        return <div className="col-lg-4" key={i}>
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                            <h3>{e.head}</h3>
                            <p className="lead mb-0">{e.para}</p>
                        </div>
                        </div>
                     })
                    }   
                </div>
            </div>
        </section>
  </>
}

export default Icons