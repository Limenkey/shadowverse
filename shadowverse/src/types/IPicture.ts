import { EAspectRatio } from '../const/options/aspectRatio.ts';

export interface IPicture {
  url: string;
  alt: string;
  aspectRatio: EAspectRatio;
}
