import { useState } from "react"
import "./App.css"

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noPosition, setNoPosition] = useState({ top: "65%", left: "55%" })

  const [imageScale, setImageScale] = useState(0)
  const [showAnnoy, setShowAnnoy] = useState(false)

  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 60 + 20) + "%"
    const left = Math.floor(Math.random() * 60 + 20) + "%"

    setNoPosition({ top, left })

    if (!showAnnoy) {
      setShowAnnoy(true)
      setImageScale(0.3)
    } else {
      setImageScale((prev) => Math.min(prev + 0.15, 1.4))
    }
  }

  return (
    <div className="container">
      {/* 🎉 CONFETTI OVERLAY */}
      {accepted && (
        <img
          src="./confetti.gif"
          alt="confetti"
          className="confetti"
        />
      )}

      {!accepted ? (
        <>
          {/* MAIN CONTENT */}
          <div className="content">
            <div className="gif-pill">
              <img src="./jester.gif" alt="cute gif" className="gif" />
            </div>

            {showAnnoy && (
              <div className="reaction-wrapper">
                <img
                  src="./annoy.webp"
                  alt="annoyed reaction"
                  className="reaction-img"
                  style={{
                    transform: `scale(${imageScale})`,
                    transformOrigin: "top right",
                  }}
                />
              </div>
            )}

            <h1>alooooo ❤️</h1>
            <h2>Will you be my best friend?</h2>

            <div className="buttons">
              <button
                className="yes"
                onClick={() => {
                  setAccepted(true)
                  setShowAnnoy(false)
                  setImageScale(0)
                }}
              >
                Yes 💖
              </button>
            </div>
          </div>

          {/* NO BUTTON */}
          <button
            className="no"
            style={{
              top: noPosition.top,
              left: noPosition.left,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            No 😝
          </button>
        </>
      ) : (
        <div className="success">
          {/* 🥳 YAY IMAGE */}
          <img
            src="./yayy.webp"
            alt="yay"
            className="yayy-img"
          />

          <h1>omg omg omg omg 🎉💘</h1>
          <p>
            You just made me the happiest person ever.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
