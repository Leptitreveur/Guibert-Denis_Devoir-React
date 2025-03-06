import Jdabout from "../jsx/images.jsx"

export  function Profil() {
    const message = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque. Phasellus convallis, lorem at dictum ultricies, neque tortor posuere mauris, ac dignissim odio risus et nisl. Curabitur molestie tempor tortor, faucibus efficitur massa dictum non. Donec eu tellus in nunc dapibus commodo. Sed ut quam mi. Curabitur suscipit at lorem a dapibus.Nullam sed dapibus justo.Phasellus eu sapien in sapien aliquam interdum vel vel tellus.",
     "Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris. Curabitur ac odio consequat, porta risus non, rutrum odio. Nulla facilisi. Ut tincidunt purus tellus, ac aliquet neque lobortis id. Nullam urna augue, efficitur vel massa in, aliquet sollicitudin augue.Nam libero massa, blandit eget ex ut, pharetra fermentum est. Donec aliquam, tellus non volutpat vehicula, metus libero finibus tortor, at porta ligula felis vitae justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
     " Nullam tincidunt, dolor quis vehicula volutpat, est nisl interdum orci, ac auctor libero tortor sed urna. Donec ut viverra mi, et efficitur nisi. Ut ac velit luctus, iaculis eros volutpat, suscipit quam. Aliquam erat volutpat. Nam in nulla urna. Duis nulla sem, pellentesque vitae diam sit amet, consectetur rhoncus tortor. Donec convallis ipsum sed convallis bibendum. Praesent ut consectetur lorem. Curabitur lobortis bibendum tortor. Etiam id orci ac odio venenatis faucibus. Etiam convallis tincidunt erat et sodales. Vivamus in urna quis lectus varius ornare ac sit amet lacus.",
     " Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum, sagittis auctor ex fermentum.Fusce sed justo in erat pulvinar eleifend vel sed quam."]
    return ( <div className="mb-4">
                <h3>A propos</h3>
                <Jdabout/>
                <div>{message.map((msg,index)=>(<p key ={index}> {msg} </p>))}</div>
            </div>)
};
export  function Realisation01() {
    const message ="Fresh Food";
    return ( <p>{message}</p> )
};
export  function Realisation02() {
    const message ="Restaurant Akira";
    return ( <p>{message}</p> )
};
export  function Realisation03() {
    const message ="Espace bien-être";
    return ( <p>{message}</p> )
};
export  function Realisation04() {
    const message ="SEO";
    return ( <p>{message}</p> )
};
export  function Realisation05() {
    const message ="Création d'une API";
    return ( <p>{message}</p> )
};
export  function Realisation06() {
    const message ="Maquette d'un site";
    return ( <p>{message}</p> )
};

export function Desgintext () {
    const text = ["L'UX design est une discipline qui consiste à concevoir des produits ( site web, application mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'experience utilisateur la plus fluide et la plus agreable possible."];
    return(<div>{text.map((msg,index)=>(<p key={index}>{msg}</p>))}</div>);
}

export function Devwebtext () {
    const text = ["Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)"];
    return(<div>{text.map((msg,index)=>(<p key={index}>{msg}</p>))}</div>);
}

export function Reftext () {
    const text = ["Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."];
    return(<div>{text.map((msg,index)=>(<p key={index}>{msg}</p>))}</div>);
}
