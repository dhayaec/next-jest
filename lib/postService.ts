// postService.ts

import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPostById(postId: number): Promise<Post | null> {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
