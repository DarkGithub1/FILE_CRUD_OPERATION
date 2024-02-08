import { useState } from 'react'
import FileCRUD from './FileStorageCRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileCRUD/>
    </>
  )
}

export default App
