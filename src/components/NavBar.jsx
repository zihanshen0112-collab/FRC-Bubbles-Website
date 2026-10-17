import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Bubbles' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/robot', label: 'Robot' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/socials', label: 'Socials' },
  { to: '/sponsors', label: 'Sponsors' },
]

export default function NavBar() {
  return (
    <nav className="top-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}