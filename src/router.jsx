import { createHashRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Robot from './pages/Robot'
import Schedule from './pages/Schedule'
import Socials from './pages/Socials'
import Sponsors from './pages/Sponsors'

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: 'robot', element: <Robot /> },
      { path: 'schedule', element: <Schedule /> },
      { path: 'socials', element: <Socials /> },
      { path: 'sponsors', element: <Sponsors /> },
    ],
  },
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
    },
  }
])
