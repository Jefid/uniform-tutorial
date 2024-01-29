import React from 'react';
import { ComponentProps } from '@uniformdev/canvas-react';
import { renderHits } from '@/canvas/Algolia/Hit';

const CanvasHits = (componentProps: ComponentProps) => {
  return <div className="hits" >
      <div style ={{textAlign: 'center'}}>
        Breweries that best match your search:
      </div>
    {renderHits(componentProps.component)}
  </div>;
};

export default CanvasHits;
