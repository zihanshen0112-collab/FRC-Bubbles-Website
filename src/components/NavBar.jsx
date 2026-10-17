import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于' },
  { to: '/team', label: '团队' },
  { to: '/robot', label: '机器人' },
  { to: '/schedule', label: '日程' },
  { to: '/socials', label: '社交' },
  { to: '/sponsors', label: '赞助商' },
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