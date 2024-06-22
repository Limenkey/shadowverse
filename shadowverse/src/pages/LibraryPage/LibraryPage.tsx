import { PageTemplate } from '../../shared/layout';
import { LibraryFilterbar } from './components/LibraryFilterbar';

import { LibraryList } from './components/LibraryList';

const LibraryPage = () => {
  return (
    <PageTemplate title='Library'>
      <LibraryFilterbar />
      <LibraryList />
    </PageTemplate>
  );
};

export default LibraryPage;
