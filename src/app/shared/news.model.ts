interface Source { 
  id: string;
  name: string;
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
  Articles
}
