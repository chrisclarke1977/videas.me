import { TSocial } from './TSocial';

export type TUser = {
  social: TSocial[] | null;
  avatar: string;
  user: string;
  name: string;
  about: string;
  info: string[];
};
