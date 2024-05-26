import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Icons from './components/Icons'
import Imagegrid from './components/Imagegrid'
import Testimonials from './components/Testimonials'
import Action from './components/Action'
import Footer from './components/Footer'
import image1 from './assets/img/bg-showcase-1.jpg'
import image2 from './assets/img/bg-showcase-2.jpg'
import image3 from './assets/img/bg-showcase-3.jpg'
import img1 from './assets/img/testimonials-1.jpg'
import img2 from './assets/img/testimonials-2.jpg'
import img3 from './assets/img/testimonials-3.jpg'

function App() {
  let iconData = [
    {
      head:"Fully Responsive",
      para:"This theme will look great on any device, no matter the size!"
    },
    {
      head:"Bootstrap 5 Ready",
      para:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      head:"Easy to Use",
      para:"Ready to use with your own content, or customize the source files!"
    }

  ]
  let gridData = [
    {
      img:image1,
      head:"Fully Responsive Design",
      align:"left",
      para:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      img:image2,
      head:"Updated For Bootstrap 5",
      align:"right",
      para:"Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      img:image3,
      head:"Easy to Use & Customize",
      align:"left",
      para:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }

  ]
  let testData = [
    {
      img:img1,
      name:"Margaret E.",
      para:"This is fantastic! Thanks so much guys!"
    },
    {
      img:img2,
      name:"Fred S.",
      para:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      img:img3,
      name:"Sarah W.",
      para:"Thanks so much for making these free resources available to us!"
    }
  ]
  return <>
      <Navbar/>
      <Header/>
      <Icons iconData={iconData}/>
      <Imagegrid gridData={gridData}/>
      <Testimonials testData={testData}/>
      <Action/>
      <Footer/>

  </>

   
  
}

export default App