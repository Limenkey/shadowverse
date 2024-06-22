import { PageTemplate } from '../../shared/layout';
import { LibraryFilterbar } from './components/LibraryFilterbar';

const LibraryPage = () => {
  return (
    <PageTemplate title='Library'>
      <LibraryFilterbar />
    </PageTemplate>
  );
};

export default LibraryPage;
