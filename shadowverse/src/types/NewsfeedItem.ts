import { IPicture } from './IPicture.ts';

export interface NewsfeedItem {
  id: string;
  title: string;
  type: 'announcement' | 'article' | 'image' | 'story';
  image: IPicture;
  description: string;
  shortDescription: string;
  createdAt: string;
  file?: string;
}
