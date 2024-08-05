import OverlayContainerCss from './OverlayContainer.module.css';

interface OverlayTypes {
  header: string,
  description: string,
  btnText: string,
  isRegistered: boolean,
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>,
}

export const OverlayContainer = ({ header, description, btnText, isRegistered, setIsRegistered }: OverlayTypes) => {
  const handleSwitch = () => {
    setIsRegistered(!isRegistered)
  }

  return (
    <>
      <div className={OverlayContainerCss.overlayContainer}>
        <div className={OverlayContainerCss.overlay}>
          <div className={`${OverlayContainerCss.overlayPanel} ${OverlayContainerCss.overlayLeft}`}>
            <h1 className={OverlayContainerCss.header}>{header}</h1>
            <p className={OverlayContainerCss.description}>{description}</p>
            <button className={OverlayContainerCss.ghost}
              id="signIn"
              onClick={handleSwitch}
            >{btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  )
};