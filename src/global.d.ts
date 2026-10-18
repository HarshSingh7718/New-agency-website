import type {DetailedHTMLProps, HTMLAttributes} from 'react';

type IconifyElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {icon?: string};

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': IconifyElementProps;
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyElementProps;
    }
  }
}
