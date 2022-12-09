import './App.css';
import './Styles/main.scss'
import Tag from "./Components/Tag";
import Toast from "./Components/Toast";
import {useState} from "react";

function App() {

  const buttons = [
    {
      label: 'Info',
      message: 'For your information, Winter is coming.',
      css: {
        borderRadius: '3px',
        backgroundColor: '#457EAC',
      }
    },
    {
      label: 'Success',
      message: 'YATA !!! You made it !',
      css: {
        borderRadius: '3px',
        backgroundColor: '#55A630',
      },
    },
    {
      label: 'Warning',
      message: 'Better a bit of `clic`, then a bag of `clac` !',
      css: {
        borderRadius: '3px',
        backgroundColor: '#FFC000',
        color: 'black',
      },
    },
    {
      label: 'Danger',
      message: 'Emergency alert. Please evacuate immediately !',
      css: {
        borderRadius: '3px',
        backgroundColor: '#D00000',
      }
    }
  ]

  const [showInfo, setShowInfo] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [showDanger, setShowDanger] = useState(false)

  const handleCloseInfo = () => setShowInfo(false)
  const handleCloseSuccess = () => setShowSuccess(false)
  const handleCloseWarning = () => setShowWarning(false)
  const handleCloseDanger = () => setShowDanger(false)

  const button = (id) => { return buttons.find(({ label }) => label === id)}

  const toggleVisibility = (event) => {

    switch (event.target.id) {
      case "Info": setShowInfo(!showInfo); break
      case "Success": setShowSuccess(!showSuccess); break
      case "Warning": setShowWarning(!showWarning); break
      case "Danger": setShowDanger(!showDanger); break
      default: break;
    }
  }

  return (
    <>
      <div className="toast-wrapper">
        {showInfo
          ? <Toast
            type="Info"
            onClose={handleCloseInfo}
            button={{...button("Info")}}
          />
          : null
        }
        {showSuccess
          ? <Toast
            type="Success"
            onClose={handleCloseSuccess}
            button={{...button("Success")}}
          />
          : null
        }
        {showWarning
          ? <Toast
            type="Warning"
            onClose={handleCloseWarning}
            button={{...button("Warning")}}
          />

          : null
        }
        {showDanger
          ? <Toast
            type="Danger"
            onClose={handleCloseDanger}
            button={{...button("Danger")}}
          />
          : null
        }
      </div>
      <section className="App wrapper">
        <header><h2>Quelle alerte voulez-vous faire apparaitre ?</h2></header>
        <main>
          {buttons.map((button, key) => {
            return (
              <Tag className="button"
                   css={{ ...button.css }}
                   key={key}
                   label={button.label}
                   button={{ ...button }}
                   onClick={toggleVisibility}
              />
            )
          } ) }
        </main>
      </section>
    </>
  )
}

export default App;
