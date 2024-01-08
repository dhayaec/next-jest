import { Post, createPost } from './createPost';

export const post: Post = {
  body: 'body',
  title: 'title',
  userId: 1,
};

describe('Post', () => {
  it('should create post', async () => {
    const postResponse = await createPost(post);
    expect(postResponse).toEqual(post);
  });

  it('should handle failure case', async () => {
    try {
      await createPost({ body: '', title: '', userId: 0 });
    } catch (err) {
      expect(err).toEqual({});
    }
  });
});
