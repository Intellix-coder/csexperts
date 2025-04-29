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
  { id: "2023-paper-1", name: "2023 Paper 1", year: "2023", url: "https://www.mediafire.com/file/7t4ok30r5fcm5rq/Computer_Science_MS2023_1-Edited.pdf/file" },
  { id: "2022-paper-1", name: "2022 Paper 1", year: "2022", url: "https://www.mediafire.com/file/ynzwanlu9y0atry/A_LEVEL_COMP_SCIE_2022_P1_MS.pdf/file" },
  { id: "2021-paper-1", name: "2021 Paper 1", year: "2021", url: "https://www.mediafire.com/file/bt0ziv07o2ubgk4/2021_bluebook_Computer_Science.pdf/file" },
  { id: "2020-paper-1", name: "2020 Paper 1", year: "2020", url: "https://www.mediafire.com/file/u21z60w1hgdyya8/2020_paper_1.pdf/file" },
  { id: "2019-paper-1", name: "2019 Paper 1", year: "2019", url: "https://www.mediafire.com/file/70ovlmxfpwmgix3/2019_paper_1.pdf/file" },
  { id: "2018-paper-1", name: "2018 Paper 1", year: "2018", url: "https://www.mediafire.com/file/kc8mbjqwmzkznoy/2018_paper_1.pdf/file" },
  { id: "2017-paper-1", name: "2017 Paper 1", year: "2017", url: "https://www.mediafire.com/file/10dfw9r7fn4jmlr/2017_paper_1.pdf/file" },
  { id: "2016-paper-1", name: "2016 Paper 1", year: "2016", url: "https://www.mediafire.com/file/j202ce5mgdri8c0/2016_paper_1.pdf/file" },
  { id: "2015-paper-1", name: "2015 Paper 1", year: "2015", url: "https://www.mediafire.com/file/vvlblbuawfxbfcw/2015_paper1.pdf/file" },
];

export const practicalPapers: Papers[] = [
  { id: "2023-paper-2", name: "2023 Paper 2", year: "2023", url: "https://www.mediafire.com/file/dqv7qvajuewn9yi/6023_2023_2_CYBERWAVE_MS.pdf/file" },
  { id: "2022-paper-2", name: "2022 Paper 2", year: "2022", url: "https://www.mediafire.com/file/2ty2uux3z759i1z/Computer_Science_Paper_2_2022.pdf/file" },
  { id: "2021-paper-2", name: "2021 Paper 2", year: "2021", url: "https://www.mediafire.com/file/hnded91agzg2gjm/Computer_Science_6023-2_2021.pdf/file" },
  { id: "2020-paper-2", name: "2020 Paper 2", year: "2020", url: "https://www.mediafire.com/file/hotm1dd3sbu2awq/2020_paper_2.pdf/file" },
  { id: "2019-paper-2", name: "2019 Paper 2", year: "2019", url: "https://www.mediafire.com/file/ets75idtd2syutb/2019_paper_2.pdf/file" },
  { id: "2018-paper-2", name: "2018 Paper 2", year: "2018", url: "https://www.mediafire.com/file/z41u3ahebs7oqk6/2018_paper_2.pdf/file" },
  { id: "2018-specimen-paper-2", name: "2018 Specimen Paper 2", year: "2018", url: "https://www.mediafire.com/file/mdypgh22bwi5gb6/2018_paper_2_specimen-1.pdf/file" },
  { id: "2017-paper-2", name: "2017 Paper 2", year: "2017", url: "https://www.mediafire.com/file/6p9r59bta2ni48y/2017_paper_2.pdf/file" },
];

export const programmingNotes = [
  { id: "pn-1", name: "Programming Part 1", part: "1", url: "https://www.mediafire.com/file/sm6mju7lumr2pzr/PROGRAMMING_PART_1.pdf/file" },
  { id: "pn-2", name: "Programming Part 2", part: "2", url: "https://www.mediafire.com/file/8n8x77e172pmm0x/PROGRAMMING_PART_2.pdf/file" },
  { id: "pn-3", name: "Programming Part 3", part: "3", url: "https://www.mediafire.com/file/lix0pihvmewndyi/Programming_Part_3.pdf/file" },
  { id: "pn-3b", name: "Programming Part 3B", part: "3B", url: "https://drive.google.com/file/d/1e_QWZC9aSYoVE70UB_Mk4Jh3TfMQtd96/view?usp=sharing" },
  { id: "pn-4", name: "Programming Part 4", part: "4", url: "https://www.mediafire.com/file/x21isg79y8w3qo0/programming_part_4.pdf/file" },
  { id: "pn-5", name: "Programming Part 5", part: "5", url: "https://www.mediafire.com/file/emvommfbnojk8ai/Programming_part_5%2528pure_coding_revision%2529.pdf/file" },
  { id: "pn-7", name: "Programming Part 7", part: "7", url: "https://www.mediafire.com/file/9l0r7qpjqc14hnq/programming_part_7.pdf/file" },
  { id: "pn-7b", name: "Programming Part 7B", part: "7B", url: "https://drive.google.com/file/d/1Cftnuiym3Dz9lLaj7l0m75nZbR-B5l2U/view?usp=sharing" },
  { id: "pn-8", name: "Programming Part 8", part: "8", url: "https://www.mediafire.com/file/drhmgbatfp4qe7j/programming_part_8.pdf/file" },
  { id: "pn-9", name: "Programming Part 9", part: "9", url: "https://drive.google.com/file/d/1g27E94rbIYrAIHE_zagnWWzY8L03MEKe/view?usp=sharing" },
  { id: "pn-10", name: "Programming Part 10", part: "10", url: "https://drive.google.com/file/d/15O6h21gjQjEpDlJ1ZnoEY6N39RgS0PVF/view?usp=sharing" },
  { id: "degree-programmes", name: "Degree Programmes & Careers", part: "Career Guide", url: "https://www.mediafire.com/file/kb46j9vnui3j1y3/degree-programmes-offered-and-careers.pdf/file" },
];

export const specialTopics = [
  { id: "st-1", name: "String Manipulation Q&S", category: "Examples", url: "https://drive.google.com/file/d/1ZhHeAPIGxg_c8RV33sI90mvInNY94whx/view?usp=sharing" },
  { id: "st-2", name: "Python eBook 3.0", category: "Python", url: "https://drive.google.com/file/d/1HTjHYUAl5QVxGHadMIP5pOsxjDk6IkzV/view?usp=sharing" },
  { id: "st-3", name: "Kapondeni", category: "Reference", url: "https://drive.google.com/file/d/1dS0KnWMR0a4wGwsisN_dyw0roJDsfMOe/view?usp=sharing" },
  { id: "st-4", name: "Connecting Database to VB", category: "Database", url: "https://drive.google.com/file/d/1mrA_FXuPiStEljyjV4tR8sQIPttLK84l/view?usp=sharing" },
  { id: "st-5", name: "Coding Essentials (Series 1)", category: "Essentials", url: "https://drive.google.com/file/d/1oOdhlumAxjnw-HAjJ8WEVymo8mdvgxmP/view?usp=sharing" },
  { id: "st-6", name: "Array Binary Tree", category: "Data Structures", url: "https://drive.google.com/file/d/1MvLow2HUZ5zNx_lnZvGwh6kGFqbY6Qvh/view?usp=sharing" },
  { id: "st-7", name: "Structured Programming", category: "Principles", url: "https://drive.google.com/file/d/1kTssJpL29snEsn0e6isKJgcCle4ItCGE/view?usp=sharing" },
];
