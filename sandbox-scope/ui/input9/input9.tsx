import React, { ReactNode } from 'react';

export type Input9Props = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Input9({ children }: Input9Props) {
  return (
    <div>
      {children}
    </div>
  );
}
