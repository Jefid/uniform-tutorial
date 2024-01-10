import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import { CloudinaryCard } from './CloudinaryCard';

export type CloudinaryCardProps = ComponentProps<{
  src: string | Types.CloudinaryImage;
  width: number;
  height: number;
  alt?: string;
  quality?: number;
  title: string;
  description: string;
  sanityDescription: string;
  sanityTitle: string;
}>;

registerUniformComponent({ type: 'cloudinaryCard', component: CloudinaryCard });

export default CloudinaryCard;
