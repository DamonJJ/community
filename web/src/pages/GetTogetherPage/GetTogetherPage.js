import { MetaTags } from '@redwoodjs/web'
import GetTogetherCell from 'src/components/GetTogetherCell'

const GetTogetherPage = ({ id }) => {
  return (
    <>
      <MetaTags title="GetTogether" description="GetTogether page" />

      <GetTogetherCell id={id} />
    </>
  )
}

export default GetTogetherPage
