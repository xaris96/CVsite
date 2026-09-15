import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/routes'
import { LanguageProvider } from '@/i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App
