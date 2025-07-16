import React from 'react'

const about = () => {
  return (
    <div>
      
        <h2> React Router is a multi-strategy router for React bridging the gap from React 18 to React 19.
           You can use it maximally as a React framework or minimally as a library with your own architecture.

          Getting Started - Framework
          Getting Started - Library
          If you are caught up on future flags, upgrading from React Router v6 or Remix is generally non-breaking:

          Upgrade from v6
          Upgrade from Remix
          React Router as a Library
          Like previous versions, React Router can still be used as a simple, declarative routing library. Its only job will be matching the URL to a set of components, providing access to URL data, and navigating around the app.

          This strategy is popular for "Single Page Apps" that have their own frontend infrastructure and v6 apps looking for a stress free upgrade.

          It's particularly good at offline + sync architectures where pending states are rare and users have long running sessions. Framework features like pending states, code splitting, server rendering, SEO, and initial page load times can be traded out for instant local-first interactions.


          Get Started with React Router as a library.

          React Router as a framework
          React Router can be used maximally as your React framework. In this setup, you'll use the React Router CLI and Vite bundler plugin for a full-stack development and deployment architecture. This enables React Router to provide a large set of features most web projects will want, including:

          Vite bundler and dev server integration
          hot module replacement
          code splitting
          route conventions with type safety
          file system or config-based routing
          data loading with type safety
          actions with type safety
          automatic revalidation of page data after actions
          SSR, SPA, and static rendering strategies
          APIs for pending states and optimistic UI
          deployment adapters
          Routes are configured with routes.ts which enables React Router to do a lot for you. For example, it will automatically code-split each route, provide type safety for the parameters and data, and automatically load the data with access to pending states as the user navigates to it.

          Route modules also provide conventions for SEO, asset loading, error boundaries, and more.

          Get Started with React Router as a framework.</h2>
      
    </div>
  )
}

export default about