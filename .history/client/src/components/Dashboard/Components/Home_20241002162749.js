import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Stats from './Stats'

/*************  ✨ Codeium Command 🌟  *************/
/**
 * The HomeAdmin component is the main view of the admin dashboard.
 * It contains a sidebar for navigation and a content area for the main view.
 *
 * The content area contains the Header component, which displays the username and logout button,
 * and the Stats component, which displays the statistics of the platform.
 */
const HomeAdmin = () => {
  return (
    <div className="dashboard">
       {/* The sidebar is used for navigation */}
       <Sidebar />

       {/* The content area contains the main view of the dashboard */}
       <div className="content">
        {/* The Header component displays the username and logout button */}
        <Header />
        {/* The Stats component displays the statistics of the platform */}
        <Stats />
      </div>

    </div>
  )
}

/******  17b93a15-a330-45f9-a6b7-ca9eb63e7b86  *******/

export default HomeAdmin
