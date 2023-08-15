
export interface WikiArticle {
  title: string;
  path: string;
  contents: {
    section: string;
    sectionContent: string;
  }[];
}

export type PageProps = {
  children: never;
  params: {  article: string };
};
export interface HeaderConfig {
  field: string;
  name: string;
}

export interface RowConfig {
  id: number;
  [key: string]: any;
}
