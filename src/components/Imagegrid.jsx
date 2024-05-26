import React from 'react'

function Imagegrid({gridData}) {
  return <>
        <section className="showcase">
            <div className="container-fluid p-0">
            {gridData.map((e,i) => {
                return <div className="row g-0" key={i}>
                <div className={`col-lg-6 ${(e.align == "left")? 'order-lg-2':''} text-white showcase-img`}  style = {{backgroundImage:`url(${e.img})`}}></div>
                <div className={`col-lg-6 ${(e.align == "left")? 'order-lg-1':''}  my-auto showcase-text`}>
                    <h2>{e.head}</h2>
                    <p className="lead mb-0">{e.para}</p>
                </div>
                </div>
            })
            }
            </div>
        </section>
  </>
}

export default Imagegrid