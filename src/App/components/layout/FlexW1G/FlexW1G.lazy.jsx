import React, { lazy, Suspense } from 'react';

const LazyFlexW1G = lazy(() => import('./FlexW1G'));

const FlexW1G = props => (
  <Suspense fallback={null}>
    <LazyFlexW1G {...props} />
  </Suspense>
);

export default FlexW1G;
