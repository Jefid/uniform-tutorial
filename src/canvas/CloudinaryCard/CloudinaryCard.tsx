import { FC } from 'react';
import classNames from 'classnames';
import { CloudinaryCardProps } from '.';
import NextImage from '../Image';
import Image from 'next/image';
import { getMediaUrl } from '../../utilities';

export const CloudinaryCard: FC<CloudinaryCardProps> = ({
  src,
  width,
  height,
  alt,
  quality,
  sanityDescription,
  sanityTitle,
}) => {
  return (
    <div className={classNames('flex flex-col items-center pt-12')}>
      <Image
        src={getMediaUrl(src)}
        width={width}
        height={height}
        // className={classNames('relative max-w-max h-max')}
        alt={alt ?? 'image'}
        quality={quality}
      />
      <div className={classNames(' max-w-max h-max')}>{sanityTitle}</div>
      <div className={classNames(' max-w-max h-max')}>{sanityDescription}</div>
    </div>
  );
};
