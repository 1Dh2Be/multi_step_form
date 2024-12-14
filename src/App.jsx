import './App.css'

// Library imports here
import { createBrowserRouter, RouterProvider } from 'react-router'


// Layout import here
import RootFormLayout from './layout/RootFormLayout.jsx'

// Page imports here
import FormStep1 from './pages/form-step1/FormStep1.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootFormLayout/>,
      children: [
        {path: "step1", element: <FormStep1/>},
      ]
    }
  ])

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
