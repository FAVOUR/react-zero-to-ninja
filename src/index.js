import react from 'react'
import ReactDOM from 'react-dom'

function welcome () {
  return (
    <div>
      <h1>I am a product of functional component</h1>
    </div>
  )
}

ReactDOM.render(<welcome />, document.getElementById('root'))
