import React, { ReactNode } from 'react';

export type Input8Props = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Input8({ children }: Input8Props) {
  return (
    <div>
      {children}
    </div>
  );
}
