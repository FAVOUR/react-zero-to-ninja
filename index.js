import react from 'react'
import ReactDOM from 'react-dom'

function welcomeStatement () {
  return (
    <div>
      <h1>I am a product of functional component</h1>
    </div>
  )
}

ReactDOM.render(
  <h1>I am a product of functional component</h1>,
  document.getElementById('root')
)
