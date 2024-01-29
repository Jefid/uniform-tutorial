import React, { createContext, useContext } from 'react';

const DefaultIndexContext = createContext<string | undefined>(undefined);

const CanvasAlgoliaProvider = ({
  defaultIndexName,
  children,
}: {
  defaultIndexName: string;
  children: any;
}) => {
  return <DefaultIndexContext.Provider value={defaultIndexName}>{children}</DefaultIndexContext.Provider>;
};
// eslint-disable-next-line
export const getDefaultIndexName = () => useContext(DefaultIndexContext);

export default CanvasAlgoliaProvider;
