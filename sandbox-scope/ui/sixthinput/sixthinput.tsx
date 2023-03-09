import React, { ReactNode } from 'react';

export type SixthinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Sixthinput({ children }: SixthinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
