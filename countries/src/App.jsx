import { Suspense } from 'react'
import './App.css'
import Countries from './Component/Countries/Countries'


const countryPromise=fetch("https://openapi.programming-hero.com/api/all").then(res=>res.json())
function App() {
  return (
    <>
      <Suspense fallback={<p>loading now................</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
