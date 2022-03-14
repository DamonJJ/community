// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import EventsLayout from 'src/layouts/EventsLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Set wrap={EventsLayout}>
          <Route path="/admin/events/new" page={EventNewEventPage} name="newEvent" />
          <Route path="/admin/events/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
          <Route path="/admin/events/{id:Int}" page={EventEventPage} name="event" />
          <Route path="/admin/events" page={EventEventsPage} name="events" />
        </Set>
      </Private>
      <Set wrap={DashboardLayout}>
        <Route path="/get-together/{id:Int}" page={GetTogetherPage} name="getTogether" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
