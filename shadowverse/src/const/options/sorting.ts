import type { ISelectItem } from '../../types/generics';
import { ESorting } from '../../types/enums/sorting.ts';

export const sortingOptions: ISelectItem<ESorting>[] = [
  {
    id: ESorting.DESCENDING,
    label: 'Newer first',
  },
  {
    id: ESorting.ASCENDING,
    label: 'Older first',
  },
];
