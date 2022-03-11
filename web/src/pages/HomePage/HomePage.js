import { MetaTags } from '@redwoodjs/web'
import GetTogethers from 'src/components/GetTogethersCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <GetTogethers />
    </>
  )
}

export default HomePage
