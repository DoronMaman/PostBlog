export interface Post {
    author: string;
    description: string;
    creationTime: number;
}
export interface PostForest {
    roots: Post[];
}