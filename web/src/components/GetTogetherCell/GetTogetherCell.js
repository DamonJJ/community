export const QUERY = gql`
  query FindGetTogetherQuery($id: Int!) {
    getTogether: event(id: $id) {
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

export const Success = ({ getTogether }) => {
  return <div>{JSON.stringify(getTogether)}</div>
}
