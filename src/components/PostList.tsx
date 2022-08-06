import React, { useEffect, useState, FC } from 'react'; 

// Components
import Card from '@/components/Card';

// Services
import { Post } from '@/services/PostService';
import { PostType } from '@/models/post.interface';

import "@/styles/components/PostList"

type PostListProps = {}

const PostList: FC<PostListProps> = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = () => {
      Post.getPosts().then((res) => {
        setPosts(res)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
      })
    }
    fetchPost()
  }, [])

  return (
    <div className="post-list-component">
      { 
        loading ? (
          <h2>Loading...</h2>
        ) : posts.map((post) => (
          <Card
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  )
}

export default PostList