import {
  PlacementWithLogical,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { APP_COLORS } from '../../../../const/styles';
import { SelectableButton } from '../../buttons';

interface BasicDropdownProps<TId> {
  trigger: React.ReactNode;
  items: {
    id: TId;
    label: string;
  }[];
  value: TId;
  onChange: (id: TId) => void;
  bodyWidth?: string;
  placement?: PlacementWithLogical;
}

export const BasicDropdown = <TId extends string>(
  props: BasicDropdownProps<TId>,
) => {
  const { bodyWidth, items, onChange, placement, trigger, value } = props;

  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <Popover
      placement={placement}
      isOpen={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <Portal>
        <PopoverContent
          bg={APP_COLORS.secondaryBlack}
          border='none'
          py='8px'
          width={bodyWidth}
        >
          <PopoverBody>
            <Stack>
              {items.map((el) => (
                <SelectableButton
                  key={el.id}
                  label={el.label}
                  isActive={el.id === value}
                  onClick={() => {
                    onChange(el.id);
                    onClose();
                  }}
                />
              ))}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
