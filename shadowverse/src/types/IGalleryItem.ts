import { IPicture } from './IPicture.ts';

export interface IGalleryItem extends IPicture {
  title: string;
  description: string;
  id: string;
  createdAt: string;
}
