import AboutBg from "jsx/images.jsx"
import { SectionTitle } from "jsx/components"

// * PROFIL ===========================================================================================================================================

export  function Profil() {
    const message = ["Lorem ipsum dolor sit amet, consecte apiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque.",
        "Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris.",
        " Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum."]
    return ( <div className="app_profilComponent">
                <SectionTitle title = "A propos"/>
                <AboutBg/>
                <div className="profilTextBox">
                    {message.map((msg,index)=>(
                        <p key ={index} className="profilText-item">
                            {msg} 
                        </p>
                    ))}
                </div>
            </div>)
}

//* Legal notice ===========================================================================================================================================

export function CreditText () {
    const text = [
    <>
        Ce site a été réalisé par Jhon Doe, étudiant au {" "}
        <a href="https:www.centre-europeen-formation.fr/" target="_blank"> Centre Européen de formation</a>
    </>,
    <>
        Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site {" "}
        <a href="https:pixabay.com/fr/" rel="noreferrer" target="_blank">Pixabay</a>
    </>,
    <>
        La favicon de ce site a été fournie par {" "}
        <a href="https:www.flaticon.com/de/kostenlose-icons/john-doe" rel="noreferrer" target="_blank">Jhon Doe icons erstellt von Freepik - Flaticon </a>
        et la conversion des images sur {" "}
        <a href="{https:favicon.io/favicon-converter/}" target="_blank"> favicon.io</a>
        .
    </>
    ];
    return(
        <div className="app_credittextComponent">
            {text.map((msg,index)=>(
                <div key={index}>
                    <p>{msg}</p>
                </div>
            ))}
        </div>);
}

