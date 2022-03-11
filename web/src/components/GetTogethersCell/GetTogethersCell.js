import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query GetTogethersQuery {
    getTogethers: events {
      id
      dietaryPreference
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ getTogethers }) => {
  return getTogethers.map((getTogether) => (
    <article key={getTogether.id}>
      <header>
        <h2>
          <Link to={routes.getTogether({ id: getTogether.id })}>
            {getTogether.dietaryPreference}
          </Link>
        </h2>
      </header>
      <p>{getTogether.body}</p>
      <div>Posted at: {getTogether.createdAt}</div>
    </article>
  ))
}
