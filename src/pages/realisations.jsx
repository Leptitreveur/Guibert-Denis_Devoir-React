import { Bannerbg } from "$/jsx/images"
import { Cardlist } from "$/jsx/elements"

export default function Projectpage() {
  return(
      <div className="mb-5">
        <Bannerbg/>
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
          <h1>Portfolio</h1>
          <p>Voici quelques unes de mes réalisations</p>
          <hr className="m-0 p-0 bg-primary opacity-100" style={{height : '0.4rem', width :'8rem'}} />
        </div>
        <Cardlist/>
      </div>
  )
}