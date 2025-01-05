interface TitleBarBaseProps {
  children: React.ReactNode
}

function TitleBarBase({ children }: TitleBarBaseProps): JSX.Element {
  return (
    <header
      className="fixed title-bar"
      style={{
        left: 'env(titlebar-area-x, 0)',
        top: 'env(titlebar-area-y, 0)',
        height: 'env(titlebar-area-height, 50px)',
        width: 'env(titlebar-area-width, 100%)',
        WebkitAppRegion: 'drag'
      }}
    >
      {children}
    </header>
  )
}

export default TitleBarBase
