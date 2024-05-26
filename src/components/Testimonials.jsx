import React from 'react'

function Testimonials({testData}) {
  return <>
  
  <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                {testData.map((e,i) => {

                    return <div className="col-lg-4" key={i}>
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={e.img} alt={e.name} />
                        <h5>{e.name}</h5>
                        <p className="font-weight-light mb-0">"{e.para}"</p>
                    </div>
                    </div>

                    })
                    
                }
                </div>
            </div>
        </section>
  </>
}

export default Testimonials