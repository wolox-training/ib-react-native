export interface BookProps {
  book: BookData;
}

export interface RenderBookProps {
  item: BookData;
}

export interface BookData {
  id: string;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image: string;
}
