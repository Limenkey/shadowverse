export interface NewsfeedItem {
  id: string;
  title: string;
  type: 'announcement' | 'article' | 'story';
  image: {
    url: string;
    alt: string;
  };
  description: string;
  createdAt: string;
}