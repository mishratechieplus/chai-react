import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
   


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}



// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'click me to visit Google'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    visit google
  </a>
)


const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'click visit google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement
)