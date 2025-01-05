import TitleBarBase from './TitleBarBase'

function TitleBar(): JSX.Element {
  return (
    <TitleBarBase>
      <div className="h-full flex items-center bg-opacity-0 hover:bg-opacity-50 bg-white px-4">
        <div className="text-[12px] text-black">Electron</div>
      </div>
    </TitleBarBase>
  )
}

export default TitleBar
