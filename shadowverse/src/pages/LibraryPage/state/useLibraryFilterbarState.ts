import { create } from 'zustand';
import { TItemType, TSortingType } from '../types/libraryFilterbarTypes.ts';

interface LibraryState {
  search: string;
  itemType: TItemType;
  sorting: TSortingType;
}

interface LibraryAction {
  setSearch: (search: string) => void;
  setSorting: (sorting: TSortingType) => void;
  setItemType: (type: TItemType) => void;
}
export const useLibraryFilterbarState = create<LibraryState & LibraryAction>(
  (set) => {
    return {
      itemType: 'all',
      search: '',
      setItemType: (itemType) => set(() => ({ itemType })),
      setSearch: (val) => set(() => ({ search: val })),
      setSorting: (sorting) => set(() => ({ sorting })),
      sorting: 'desc',
    };
  },
);
