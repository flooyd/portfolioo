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

export type Styles = {
  Name: [];
  Subname: [];
  Email: [];
  Phone: [];
  Location: [];
  Website: [];
  Github: [];
  Linkedin: [];
};

export const styles = writable<Styles>({
  Name: [],
  Subname: [],
  Email: [],
  Phone: [],
  Location: [],
  Website: [],
  Github: [],
  Linkedin: [],
});

export const viewing = writable<boolean>(false);
export const ready = writable(false);
export const showModal = writable(false);
export const selectedProperty = writable<string | null>(null);
export const editAll = writable(false);

export default resume;
