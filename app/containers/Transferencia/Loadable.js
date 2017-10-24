/**
 *
 * Asynchronously loads the component for Transferencia
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
