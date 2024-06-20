export interface NewsfeedItem {
  id: string;
  title: string;
  type: 'announcement' | 'article' | 'image' | 'story';
  image: {
    url: string;
    alt: string;
  };
  description: string;
  shortDescription: string;
  createdAt: string;
}
