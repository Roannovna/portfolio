// // по простому - убрать placement, адаптирует как "сам решуУуУУу..."

// import { Tour } from 'antd';
// import { tourCastomIcons } from '@/assets/tour/imp';
// import { ipadTokens } from '@/tokens/ipad-ui-tokens';

// export function TourAntd({ open, onClose }) {
//   const steps = [
//     {
//       title: 'Добро пожаловать в тур по сайту!🧭🐜',
//       description: (
//         <>
//           Этот тур познакомит вас с компонентами и функционалом моего сайта.
//           <br />
//           <br />Сам тур основан на компоненте Tour из библиотеки Ant Design и полностью кастомизирован под мой дизайн.
//           <br /><br />Нажимайте {''} <img src={tourCastomIcons.arrowNext} /> чтобы продолжить и {''} <img src={tourCastomIcons.arrowPrev} /> чтобы вернуться назад.
//           <br />Чтобы завершить тур в любой момент, нажмите на кнопку {''} <img src={tourCastomIcons.closeBtn} /> в правом верхнем углу.
//         </>
//       ),
//       target: null,
//     },
//     {
//       title: 'Status Bar',
//     description: (
//       <>
//         Статус бар в стиле Apple. Отображает текущее время и дату, уровень заряда батареи
//         (при условии разрешения доступа к таким данным) и состояние подключения к интернету.
//         <br />
//         <br />Графический индикатор уровня заряда батареи меняется в зависимости от текущего процента заряда.
//       </>
//     ),
//       target: () => document.querySelector('#status-bar'),
//     },
//     {
//       title: 'Кастомизированные часы StandBy',
//       description: (
//         <>
//           Часы как на StandBy отличаются индивидуальными углом поворота и цветом каждой цифры. 
//           <br />
//           <br />Часы созданы лично мной без использования сторонних UI библиотек.
//       </>
//       ),
//       target: () => document.querySelector('#clock-standby'),
//     },
//     {
//       title: 'Блок заметок',
//       description: 'Раздел "Обо мне" выполненный в стиле виджета заметок.',
//       target: () => document.querySelector('#notes'),
//     },
//     {
//       title: 'Виниловый музыкальный плеер',
//       description: (
//         <>
//           Музыкальный плеер в стиле винилового проигрывателя. 
//           <br />Составляющие винилового плеера отрисованы лично в Figma.
//           <br />Воспроизведение музыки реализовано без помощи сторонних UI библиотек.
//         </>
//       ),
//       target: () => document.querySelector('#vinyl-player'),
//     },
//     {
//       title: 'Контакты',
//       description: 'Блок со ссылками на мои контакты.',
//       target: () => document.querySelector('#contacts'),
//     },
//     {
//       title: 'Виджет "День-Ночь"',
//       description: (
//         <>
//           Цветовая гамма картинки сменяется в течение суток: ночь, рассвет, день и закат. 
//           <br />Картинка нарисована лично в Figma; смена цветов реализована при помощи СSS, JS и React.
//         </>
//       ),
//       target: () => document.querySelector('#day-night-widget'),
//     },
//     {
//       title: 'Календарь',
//       description: (
//         <>
//           Виджет календаря состоит из двух частей: сам календарь и его обложка.
//           <br />Обложка меняется в зависимости от сезона года.
//           <br />
//           <br />Компонент календаря взят из библиотеки Ant Design и был полностью стилизован под концепцию сайта.
//         </>
//       ),
//       target: () => document.querySelector('#calendar'),
//     },
//     {
//       title: 'Технологический стек',
//       description: (
//         <>
//           Блок с иконками технологий, которыми я владею. 
//           <br />Иконки собраны и стилизованы в Figma.
//           <br />
//           <br />При нажатии на иконку открывается frame с сайтом технологии или разделом в Дока.
//         </>
//       ),
//       target: () => document.querySelector('#tech-stack'),
//     },
//     {
//       title: 'Dock',
//       description: (
//         <>
//           Dock-панель в стиле Apple. Здесь располагаются ссылки на мои учебные проекты и кнопка открытия тура по сайту.
//           <br />
//           <br />Проекты открываюстя внутри web-приложения в отдельном окне, реализованом при помощи iframe.
//         </>
//       ),
//       target: () => document.querySelector('#dock'),
//     },
//   ];

//   const stepsWithIcons = steps.map((step) => ({
//     ...step,
//     nextButtonProps: {
//       children: <img src={tourCastomIcons.arrowNext} alt="next" />,
//     },
//     prevButtonProps: {
//       children: <img src={tourCastomIcons.arrowPrev} alt="prev" />,
//     },
//   }));

//   const customOffset = ipadTokens.spacing.uniGap;
//   const customRadius = ipadTokens.widget.medium.br + customOffset;

//   return (
//     <Tour
//       open={open}
//       onClose={onClose}
//       steps={stepsWithIcons}
//       gap={{ offset: customOffset, radius: customRadius }}
//       rootClassName="custom-tour"
//       getPopupContainer={() => document.body}
//       mask
//       closeIcon={<img src={tourCastomIcons.closeBtn} alt="close" />}
//     />
//   );
// };


// тут типа дофига вумная (как вутка)
import { Tour } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { tourCastomIcons } from '@/assets/tour/imp';
import { ipadTokens } from '@/tokens/ipad-ui-tokens';

export function TourAntd({ open, onClose }) {
  const baseSteps = useMemo(() => [
    {
      title: 'Добро пожаловать в тур по сайту!🧭🐜',
      description: (
        <>
          Этот тур познакомит вас с компонентами и функционалом сайта.
          <br/><br/>
          Сам тур основан на Ant Design Tour и полностью кастомизирован.
          <br/><br/>
          Нажимайте <img src={tourCastomIcons.arrowNext}/> чтобы продолжить.
        </>
      ),
      placement: 'center',
      target: null,
    },
    {
      title: 'Status Bar',
      description: (
        <>
          Статус бар в стиле Apple: время, дата, интернет, заряд батареи.
        </>
      ),
      target: () => document.querySelector('#status-bar'),
    },
    {
      title: 'Кастомные часы StandBy',
      description: (
        <>
          Часы созданы вручную, каждая цифра имеет свой угол и цвет.
        </>
      ),
      target: () => document.querySelector('#clock-standby'),
    },
    {
      title: 'Блок заметок',
      description: 'Виджет заметок “Обо мне”.',
      target: () => document.querySelector('#notes'),
    },
    {
      title: 'Виниловый музыкальный плеер',
      description: 'Виниловый плеер, созданный вручную в Figma.',
      target: () => document.querySelector('#vinyl-player'),
    },
    {
      title: 'Контакты',
      description: 'Ссылки на мои соцсети и контакты.',
      target: () => document.querySelector('#contacts'),
    },
    {
      title: 'Виджет “День-Ночь”',
      description: 'Цветовая гамма сменяется в зависимости от времени суток.',
      target: () => document.querySelector('#day-night-widget'),
    },
    {
      title: 'Календарь',
      description: 'Виджет календаря + динамическая обложка.',
      target: () => document.querySelector('#calendar'),
    },
    {
      title: 'Технологический стек',
      description: 'Иконки технологий + ссылки на документацию.',
      target: () => document.querySelector('#tech-stack'),
    },
    {
      title: 'Dock',
      description: 'Dock-панель в стиле Apple с проектами.',
      target: () => document.querySelector('#dock'),
    },
  ], []);

  const stepsWithIcons = useMemo(
    () =>
      baseSteps.map((step) => ({
        ...step,
        nextButtonProps: {
          children: <img src={tourCastomIcons.arrowNext} alt="next" />,
        },
        prevButtonProps: {
          children: <img src={tourCastomIcons.arrowPrev} alt="prev" />,
        },
      })),
    [baseSteps]
  );

  // auto-placement алгоритм
  const autoPlacementForRect = useCallback((rect) => {
    if (!rect) return 'bottom';

    const { top, bottom, left, right } = rect;

    const spaceTop = top;
    const spaceBottom = window.innerHeight - bottom;
    const spaceLeft = left;
    const spaceRight = window.innerWidth - right;

    const ranked = [
      ['top', spaceTop],
      ['bottom', spaceBottom],
      ['left', spaceLeft],
      ['right', spaceRight],
    ].sort((a, b) => b[1] - a[1]);

    return ranked[0][1] > 12 ? ranked[0][0] : 'bottom';
  }, []);

  // адаптивные steps
  const [adaptiveSteps, setAdaptiveSteps] = useState(stepsWithIcons);

  const recomputePlacements = useCallback(() => {
    const updated = stepsWithIcons.map((step) => {
      if (step.target == null) return step; // intro-step

      let el = null;

      try {
        el = typeof step.target === 'function' ? step.target() : step.target;
      } catch {
        return step;
      }

      if (!el) return step;

      const rect = el.getBoundingClientRect();
      const placement = autoPlacementForRect(rect);

      return {
        ...step,
        placement,
      };
    });

    setAdaptiveSteps(updated);
  }, [stepsWithIcons, autoPlacementForRect]);

  // пересчёт при открытии и resize/scroll
  useEffect(() => {
    if (open) {
      // жду пока DOM точно обновится
      requestAnimationFrame(() => {
        recomputePlacements();
      });
    }
  }, [open, recomputePlacements]);

  useEffect(() => {
    if (!open) return;

    const handler = () => recomputePlacements();

    window.addEventListener('resize', handler, { passive: true });
    window.addEventListener('scroll', handler, { passive: true });

    return () => {
      window.removeEventListener('resize', handler);
      window.removeEventListener('scroll', handler);
    };
  }, [open, recomputePlacements]);

  const customOffset = ipadTokens.spacing.uniGap;
  const customRadius = ipadTokens.widget.medium.br;

  return (
    <Tour
      open={open}
      onClose={onClose}
      steps={adaptiveSteps}
      mask
      gap={{ offset: customOffset, radius: customRadius }}
      rootClassName="custom-tour"
      getPopupContainer={() => document.body}
      scrollIntoViewOptions={{
        block: 'nearest',
        inline: 'nearest',
        behavior: 'smooth',
      }}
      indicatorsRender={(current, total) => (
        <span>
          <span style={{ color: 'var(--dark-pink)', fontWeight: 'bold' }}>
            {current + 1}
          </span>
          {" / "}
          {total}
        </span>
      )}
      closeIcon={<img src={tourCastomIcons.closeBtn} alt="close" />}
    />
  );
}
