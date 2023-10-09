import { useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function Header() {
  return <div style={{ height: '60px', backgroundColor: 'rgba(1, 0, 0, 0.3)', pointerEvents: 'auto' }}>Header</div>
}

function Main() {
  const node = useRef<HTMLDivElement>(null)

  return (
    <div style={{ flex: 1, height: '1px', width: '100%' }}>
      <SwitchTransition>
        <CSSTransition key={location.href} classNames='scale-fade' timeout={500} nodeRef={node} unmountOnExit>
          <Outlet context={{ node }} />
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
function Footer() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        height: '60px',
        backgroundColor: 'rgba(0, 0, 1, 0.3)',
        pointerEvents: 'auto',
      }}
    >
      Footer
      <span style={{ cursor: 'pointer' }} onClick={() => navigate('/outlet1')}>
        outlet1
      </span>
      <span style={{ cursor: 'pointer' }} onClick={() => navigate('/outlet2')}>
        outlet2
      </span>
    </div>
  )
}

export function Home() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
