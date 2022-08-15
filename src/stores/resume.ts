//create svelte store for resume
import { writable } from "svelte/store";

//create type for resume based on schema
export type Resume = {
  name: string;
  email: string;
  phone: string;
  subname: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
};

const resume = writable<Resume>({
  name: null,
  subname: null,
  email: null,
  phone: null,
  location: null,
  website: null,
  github: null,
  linkedin: null,
});

export type styles = {
  name: [];
  subname: [];
  email: [];
  phone: [];
  location: [];
  website: [];
  github: [];
  linkedin: [];
};

export const viewing = writable<boolean>(false);
export const ready = writable(false);
export default resume;
