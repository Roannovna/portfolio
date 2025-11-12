import { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';
// import tourBtn from '/src/assets/tour-btn.svg';

// const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w };

export function TourAntd({ open, onClose }) {
  const ref = useRef(null);
  // const [open, setOpen] = useState(false);

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
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        <img src={tourBtn} style={iconSize} alt="иконка тура" />
      </Button> */}

      {/* <Tour open={open} onClose={() => setOpen(false)} steps={steps} /> */}

      <Tour
        open={open}
        onClose={onClose}
        steps={steps}
        getPopupContainer={() => document.body}
        mask
        placement="rightBottom"
      />
    </>
  );
};
