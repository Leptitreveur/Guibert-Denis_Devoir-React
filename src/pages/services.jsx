import { BannerBg } from "jsx/images"
import { Presentation } from "jsx/components"
import { ServicesList } from "jsx/service-card"

export default function ServicesPage() {
  return(
    <div className="app_serviceContainer">
      <BannerBg/>
      <Presentation title = "Mon offre de services" description = "Voici les prestations sur lequelles je peux intervenir" />
      <ServicesList selectedIds = {['uxdesign', 'dev', 'ref']}/>
    </div>
  )
}