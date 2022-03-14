import GetTogether from 'src/components/GetTogether'

export const QUERY = gql`
  query GetTogethersQuery {
    getTogethers: events {
      id
      title
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
    <GetTogether key={getTogether.id} getTogether={getTogether} />
  ))
}
