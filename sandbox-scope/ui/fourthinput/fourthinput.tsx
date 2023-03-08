import React, { ReactNode } from 'react';

export type FourthinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Fourthinput({ children }: FourthinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
