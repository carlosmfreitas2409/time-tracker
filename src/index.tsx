import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createRouter } from '@tanstack/react-router';

import { useSession } from '@/app/lib/auth';

import { routeTree } from './routeTree.gen';

import './index.css';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { data: auth } = useSession();

  return <RouterProvider router={router} context={{ auth }} />;
}

const rootElement = document.getElementById('root');
if (rootElement && !rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
