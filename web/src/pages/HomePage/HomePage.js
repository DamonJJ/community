import { MetaTags } from '@redwoodjs/web'
import GetTogethersCell from 'src/components/GetTogethersCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <GetTogethersCell />
    </>
  )
}

export default HomePage
