import { Head } from '@unhead/react';

import { BgBanner } from "jsx/imageAssets"
import { Presentation } from "jsx/components"
import { ServiceCardList } from "jsx/serviceCard"

export default function ServicesPage() {
  return(
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page regroupant les services proposés"/>
      </Head>

      <BgBanner/>
      <Presentation title = "Mon offre de services" description = "Voici les prestations sur lequelles je peux intervenir" />
      <ServiceCardList selectedIds = {['uxdesign', 'dev', 'ref']}/>
    </>
  )
}