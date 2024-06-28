import { PageTemplate } from '../../shared/layout';
import { GalleryGrid } from './components/GalleryGrid';
import { GalleryFilterbar } from './components/GalleryFilterbar';

const GalleryPage = () => {
  return (
    <PageTemplate title='Gallery'>
      <GalleryFilterbar />
      <GalleryGrid />
    </PageTemplate>
  );
};

export default GalleryPage;
