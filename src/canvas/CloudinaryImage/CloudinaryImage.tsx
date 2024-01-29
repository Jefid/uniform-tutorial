import { FC } from 'react';
import classNames from 'classnames';
import { CloudinaryImageProps } from '.';
import NextImage from '../Image';
import Image from 'next/image';
import { getMediaUrl } from '../../utilities';

export const CloudinaryImage: FC<CloudinaryImageProps> = ({ src, width, height, alt }) => {
  return (
    <Image
      src={getMediaUrl(src)}
      width={width}
      height={height}
      className={classNames('bg-cover max-w-max h-max')}
      alt={alt ?? 'image'}
    />
  );
};
