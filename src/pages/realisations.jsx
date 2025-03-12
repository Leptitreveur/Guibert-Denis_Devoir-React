import { Bannerbg } from "$/jsx/images"
import { Cardlist, Presentation } from "$/jsx/elements"

export default function Projectpage() {
  return(
      <div className="mb-5">
        <Bannerbg/>
        <Presentation title = "Portfolio" description = "Voici quelques unes de mes réalisations."/>
        <Cardlist/>
      </div>
  )
}