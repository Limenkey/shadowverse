import { ContentCarousel, ContentList } from './components';
import { listItemsMock } from './mocks/listItemsMock.ts';
import { PageTemplate } from '../../shared/layout';

const MainPage = () => {
  return (
    <PageTemplate title="What's new">
      <ContentCarousel />
      <ContentList items={listItemsMock} />
    </PageTemplate>
  );
};

export default MainPage;
