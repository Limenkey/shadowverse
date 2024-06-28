import { create } from 'zustand';
import { ESorting } from '../../../types/enums/sorting.ts';

interface GalleryState {
  search: string;
  sorting: ESorting;
}

interface GalleryAction {
  setSearch: (search: string) => void;
  setSorting: (sorting: ESorting) => void;
}
export const useGalleryFilterbarState = create<GalleryState & GalleryAction>(
  (set) => {
    return {
      search: '',
      setSearch: (val) => set(() => ({ search: val })),
      setSorting: (sorting) => set(() => ({ sorting })),
      sorting: ESorting.DESCENDING,
    };
  },
);
