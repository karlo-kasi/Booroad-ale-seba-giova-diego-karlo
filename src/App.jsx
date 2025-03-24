import { BrowserRouter, Route, Routes } from "react-router-dom"

//layouts
import DefaultLayout from "./layouts/DefaultLayout"

//pages 
import HomePage from "./pages/HomePage"
import RubricaPage from "./pages/RubricaPage"

//singlePage
import SingleTrip from "./pages/SingleTrip"




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/rubrica" Component={RubricaPage} />
            <Route path="/viaggio/:id" Component={SingleTrip} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
