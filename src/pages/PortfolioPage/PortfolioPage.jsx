import { useEffect } from "react"
import { Head } from '@unhead/react';
import { useLocation } from "react-router-dom"

import { BgBanner } from "common/BackgroundImage/BackgroundImage"
import { Presentation } from "common/Presentation/Presentation"
import { PortfolioCardList } from "portfolio/PortfolioCardList/PortfolioCardList"

// //*Scroll vers la realisation sélectionnéee ================================================
export default function PortfolioPage() {
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

            <BgBanner/>
            <Presentation title = "Portfolio" description = "Voici quelques unes de mes réalisations."/>
            <PortfolioCardList />
        </>
    )
}