import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

type Papers = {
  id: string;
  name: string;
  year: string;
  url: string;
};

export const theoryPapers: Papers[] = [
  { id: "2023-paper-1", name: "2023 Paper 1", year: "2023", url: "#" },
  { id: "2022-paper-1", name: "2022 Paper 1", year: "2022", url: "#" },
  { id: "2021-paper-1", name: "2021 Paper 1", year: "2021", url: "#" },
  { id: "2020-paper-1", name: "2020 Paper 1", year: "2020", url: "#" },
  { id: "2019-paper-1", name: "2019 Paper 1", year: "2019", url: "#" },
  { id: "2018-paper-1", name: "2018 Paper 1", year: "2018", url: "#" },
  { id: "2017-paper-1", name: "2017 Paper 1", year: "2017", url: "#" },
  { id: "2016-paper-1", name: "2016 Paper 1", year: "2016", url: "#" },
  { id: "2015-paper-1", name: "2015 Paper 1", year: "2015", url: "#" },
];

export const practicalPapers: Papers[] = [
  { id: "2023-paper-2", name: "2023 Paper 2", year: "2023", url: "#" },
  { id: "2022-paper-2", name: "2022 Paper 2", year: "2022", url: "#" },
  { id: "2021-paper-2", name: "2021 Paper 2", year: "2021", url: "#" },
  { id: "2020-paper-2", name: "2020 Paper 2", year: "2020", url: "#" },
  { id: "2019-paper-2", name: "2019 Paper 2", year: "2019", url: "#" },
  { id: "2018-paper-2", name: "2018 Paper 2", year: "2018", url: "#" },
  { id: "2018-specimen-paper-2", name: "2018 Specimen Paper 2", year: "2018", url: "#" },
  { id: "2017-paper-2", name: "2017 Paper 2", year: "2017", url: "#" },
];
