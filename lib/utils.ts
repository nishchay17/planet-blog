import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { allBlogs } from "contentlayer/generated";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(inputStr: string) {
  return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
}

export async function copyIt(inputStr: string) {
  await navigator?.clipboard.writeText(inputStr);
}

export function getAllTags() {
  return allBlogs.reduce((tagSet, currentBlog) => {
    (currentBlog?.tags ?? []).forEach((tag) => tagSet.add(tag));
    return tagSet;
  }, new Set<string>());
}
