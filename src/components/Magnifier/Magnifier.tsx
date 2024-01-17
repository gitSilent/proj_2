import ImageNext from "next/image"
import { useState } from "react"
import "./magnifierStyles.css"

function ImageMagnifier({ imgUrl }: { imgUrl: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })


  const handleMouseHover = (e: any) => {

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setPosition({ x, y })

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top })
  }

  return (
    <div
      className="img-magnifier-container overflow-hidden"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <div className="relative magnifier-cont">
        <ImageNext fill className="magnifier-img" src={imgUrl} alt="" />
      </div>

      <div
        style={{
          visibility: `${showMagnifier ? "visible" : "hidden"}`,
          position: "absolute",
          left: `${cursorPosition.x - 100}px`,
          top: `${cursorPosition.y - 100}px`,
          pointerEvents: "none",
          zIndex: 100
        }}
      >
        <div
          className="magnifier-image "
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: "550% 350%",
          }}
        />
        {/* <ImageNext fill className="absolute" src={imgUrl} alt="" /> */}
      </div>

    </div>
  )
}

export default ImageMagnifier