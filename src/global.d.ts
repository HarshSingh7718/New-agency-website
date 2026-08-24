import React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon?: string };
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon?: string };
    }
  }
}
