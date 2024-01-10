import { FC } from 'react';
import classNames from 'classnames';
import { CloudinaryImageProps } from '.';
import NextImage from '../Image';
import { getMediaUrl } from '../../utilities';

export const CloudinaryImage: FC<CloudinaryImageProps> = ({ src, width, height, alt }) => {
  return (
    <NextImage
      src={getMediaUrl(src)}
      width={width}
      height={height}
      className={classNames('bg-cover max-w-max h-max')}
      alt={alt ?? 'image'}
    />
  );
};
