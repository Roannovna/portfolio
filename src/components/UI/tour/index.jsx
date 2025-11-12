import { useRef } from 'react';
import { Tour } from 'antd';


export function TourAntd({ open, onClose }) {
  const ref = useRef(null);

  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];

  return (
      <Tour
        open={open}
        onClose={onClose}
        steps={steps}
        getPopupContainer={() => document.body}
        mask
        placement="rightBottom"
      />
  );
};
