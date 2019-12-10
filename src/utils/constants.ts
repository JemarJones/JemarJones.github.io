import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export interface ExternalReference {
  name: string;
  link?: string;
}

export interface Skill extends ExternalReference {}

export interface Collaborator extends ExternalReference {}

export interface WorkItem {
  name: string;
  image: string;
  dateInfo?: string;
  collaborators?: Collaborator[];
  skills: Skill[];
  description: string;
  longDescription: ReactNode;
  link: string;
  isProfessional?: boolean;
}

export interface SocialMediaItem {
  name: string;
  description: string;
  link: string;
  icon: IconProp;
}
