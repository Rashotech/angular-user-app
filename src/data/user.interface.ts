import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface ISpecialization{
  icon: IconDefinition;
  title: string;
  description: string;
}

export interface IMember{
  name: string;
  title: string;
  summary: string;
  linkedIn: string;
  github: string;
  picture: any;
}