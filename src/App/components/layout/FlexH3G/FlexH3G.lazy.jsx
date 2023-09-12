import React, { lazy, Suspense } from 'react';

const LazyFlexH3G = lazy(() => import('./FlexH3G'));

const FlexH3G = props => (
  <Suspense fallback={null}>
    <LazyFlexH3G {...props} />
  </Suspense>
);

export default FlexH3G;
