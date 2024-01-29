import React from 'react';
import {
  Hits,
} from 'react-instantsearch-hooks-web';
import { ComponentInstance } from '@uniformdev/canvas';

enum HitTypes {
  Hit = 'algolia-hit',
}

export const renderHits = (component: ComponentInstance) => {
  const hitType = component?.slots?.hitComponent?.[0]?.type;


  switch (hitType) {
    case HitTypes.Hit:
      return <Hits hitComponent={Hit} />;
    default:
      return <Hits />;
  }
};

type HitComponent = {
  objectID: string;
  [name: string]: any;
};

const Hit = ({ hit }: { hit: HitComponent }) => {
  const { objectID = 'unknown', ...properties } = hit || {};

  return (
    <div>
      <p style={{ textAlign: 'center'}} >{JSON.stringify(properties?.name).replace(/\"/g, "")}</p>
      <p style={{ textAlign: 'center'}}>Brewery Type: {JSON.stringify(properties?.brewery_type).replace(/\"/g, "")}</p>
      <p style={{ textAlign: 'center'}}>{JSON.stringify(properties?.city).replace(/\"/g, "")}, {JSON.stringify(properties?.state).replace(/\"/g, "")}</p>
    </div>
  );
};

export default Hit;
