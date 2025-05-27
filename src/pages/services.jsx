import { Head } from '@unhead/react';

import { BannerBg } from "jsx/images"
import { Presentation } from "jsx/components"
import { ServicesList } from "jsx/service-card"

export default function ServicesPage() {
  return(
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page regroupant les services proposés"/>
      </Head>
      <BannerBg/>
      <Presentation title = "Mon offre de services" description = "Voici les prestations sur lequelles je peux intervenir" />
      <ServicesList selectedIds = {['uxdesign', 'dev', 'ref']}/>
    </>
  )
}