import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import { CloudinaryImage } from './CloudinaryImage';

export type CloudinaryImageProps = ComponentProps<{
  src: string | Types.CloudinaryImage;
  width: number;
  height: number;
  alt?: string;
  title: string;
  description: string;
}>;

registerUniformComponent({ type: 'cloudinaryImage', component: CloudinaryImage });

export default CloudinaryImage;
