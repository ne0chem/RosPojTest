import React from 'react';
import './Container.css';

export default function Container({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`container${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </Component>
  );
}
