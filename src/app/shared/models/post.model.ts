export interface Post {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
}
