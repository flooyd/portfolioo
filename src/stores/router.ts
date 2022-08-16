//create svelte store for resume
import { writable } from "svelte/store";

export const page = writable("floyd");

export default page;
