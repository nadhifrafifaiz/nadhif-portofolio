export type PageSpeedResponse = {
  lighthouseResult: {
    categories: {
      performance: {
        id: string;
        title: string;
        score: number;
      };
      accessibility: {
        id: string;
        title: string;
        score: number;
      };
      seo: {
        id: string;
        title: string;
        score: number;
      };
      "best-practices": {
        id: string;
        title: string;
        score: number;
      };
    };
  };
};
