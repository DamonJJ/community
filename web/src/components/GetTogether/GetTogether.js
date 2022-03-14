import { Link, routes } from '@redwoodjs/router'

const GetTogether = ({ getTogether}) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.getTogether({ id: getTogether.id })}>{getTogether.title}</Link>
        </h2>
      </header>
      <div>{getTogether.dietaryPreference}</div>
      <div>Posted at: {getTogether.createdAt}</div>
    </article>
  )
}

export default GetTogether
