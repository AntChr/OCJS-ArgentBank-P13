import { Link } from 'react-router-dom'

const Error = () => (
  <section id="error">
    <div>
      <h1>Erreur 404</h1>
      <h2>Oups! La page n'existe pas.</h2>
    </div>
    <Link className="link" to="/">
      Retourner sur la page d’accueil
    </Link>
  </section>
)

export default Error