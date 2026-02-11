export interface Post {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface CreatePostDto {
  username: string; // O backend exige saber QUEM está postando
  title: string;
  content: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
