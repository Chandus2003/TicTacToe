import { useState } from 'react'

import './App.css'
import Grid from './Component/Grid/Grid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numbeOfCard={9} />
    </>
  )
}
// import Icon from './Component/Icon/Icon'

export default App
