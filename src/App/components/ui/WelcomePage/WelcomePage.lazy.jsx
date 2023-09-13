import React, { lazy, Suspense } from 'react';

const LazyWelcomePage = lazy(() => import('./WelcomePage'));

const WelcomePage = props => (
  <Suspense fallback={null}>
    <LazyWelcomePage {...props} />
  </Suspense>
);

export default WelcomePage;
