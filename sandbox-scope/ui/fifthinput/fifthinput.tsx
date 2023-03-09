import React, { ReactNode } from 'react';

export type FifthinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Fifthinput({ children }: FifthinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
