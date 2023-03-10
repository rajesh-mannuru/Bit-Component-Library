import React, { ReactNode } from 'react';

export type SeventhinputProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Seventhinput({ children }: SeventhinputProps) {
  return (
    <div>
      {children}
    </div>
  );
}
