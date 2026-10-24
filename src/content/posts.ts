export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated: string;
  category: string;
};

/** Published articles only. Leave this empty until a real piece is ready. */
export const posts: Post[] = [];
