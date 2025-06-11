import BgAbout from "jsx/imageAssets.jsx"
import { SectionTitle } from "jsx/components"

// ! PROFIL est un composant + les classes servent pour le breakpoint ===========================================================================================================================================

export  function ProfilText() {
    const text = ["Lorem ipsum dolor sit amet, consecte apiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque.",
        "Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris.",
        " Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum."]
    return (
        <div className="app-profil__container">
            <SectionTitle title = "A propos"/>
            <div className="app-profil__content">
                <BgAbout />
                <div className="app-profil__box--text">
                    {text.map((msg,index)=>(
                        <p key ={index} className="app-profil__item">
                            {msg}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
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
        <div className="app-credit">
            {text.map((msg,index)=>(
                <div key={index}>
                    <p>{msg}</p>
                </div>
            ))}
        </div>);
}

