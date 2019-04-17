interface Source { 
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string; 
  country: string;
}

interface Sources {
  sources: Source[];
  status: string;

}

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;​​​
  urlToImage: string;
}

interface Articles {
  status: string;
  totalResults: number;
  articles: Article[];
}

export {
  Article,
  Articles,
  Source,
  Sources
}
