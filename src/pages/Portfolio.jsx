import { Head } from '@unhead/react';
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { BannerBg } from "jsx/images"
import { Presentation } from "jsx/components"
import { RealisationsList } from "jsx/realisation-card"

// //*Scroll vers la realisation sélectionnéee ================================================
const RealisationsPage = () => {
    const  { hash } = useLocation();

    useEffect(() => {
        if (hash){
            const element = document.getElementById(hash.replace(`#`, ``));
            if (element){
                element.scrollIntoView({ behavior :'smooth'});
            }
            else {
                console.error("Element non trouvé pour le hash : ", hash)
            }
        }
    }, [ hash ]);
    
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Page regroupant les différentes réalisations" />
            </Head>
            <BannerBg/>
            <Presentation title = "Portfolio" description = "Voici quelques unes de mes réalisations."/>
            <RealisationsList selectedIds ={['coder', 'bienetre', 'freshfood', 'restaujap', 'screens','seo']}/>
        </>
    )
}
export default RealisationsPage;