interface ActionButtonProps {
  onClick: () => void
  children: React.ReactNode
}

function ActionButton({ onClick, children }: ActionButtonProps): JSX.Element {
  return (
    <div className="p-2">
      <a
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className="cursor-pointer inline-block border-transparent border-r-[1px] border-solid text-center font-semibold whitespace-nowrap rounded-full px-5 leading-9 text-sm bg-slate-600 text-white"
      >
        {children}
      </a>
    </div>
  )
}

export default ActionButton
