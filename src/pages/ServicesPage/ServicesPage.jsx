import { Head } from '@unhead/react';

import { BgBanner } from "common/BackgroundImage/BackgroundImage"
import { Presentation } from "common/Presentation/Presentation"
import { ServiceCardList } from "services/ServiceCardList/ServiceCardList"

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