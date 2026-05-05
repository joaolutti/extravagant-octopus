export type TextPart = { type: "text"; value: string };
export type LinkPart = { type: "link"; value: string; href: string };
export type ContentPart = TextPart | LinkPart;
export type ProjectsData = {
  paragraphs: ContentPart[][];
  bulletPoints: string[];
};
