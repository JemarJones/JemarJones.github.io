import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ExternalReference {
  name: string;
  link: string;
}

export interface Skill extends ExternalReference {}

export interface Collaborator extends ExternalReference {}

export interface WorkItem {
  name: string;
  image: string;
  collaborators?: Collaborator[];
  skills: Skill[];
  description: string;
  longDescription: string;
  link: string;
}

export interface SocialMediaItem {
  name: string;
  description: string;
  link: string;
  icon: IconProp;
}
