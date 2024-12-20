import './App.css'

// Library imports here
import { FormProvider } from './pages/FormContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


// Layout import here
import RootFormLayout from './layout/RootFormLayout.jsx'

// Page imports here
import FormStep1 from './pages/form-step1/FormStep1.jsx'
import FormStep2 from './pages/form-step2/FormStep2.jsx'
import FormStep3 from './pages/form-step3/FormStep3.jsx'
import FormStep4 from './pages/form-step4/FormStep4.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootFormLayout/>,
      children: [
        {path: "step1", element: <FormStep1/>},
        {path: "step2", element: <FormStep2/>},
        {path: "step3", element: <FormStep3/>},
        {path:"step4", element: <FormStep4/>}
      ]
    }
  ])

  return (
    <FormProvider>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </FormProvider>
  )
}

export default App
