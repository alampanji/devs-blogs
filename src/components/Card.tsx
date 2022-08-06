
import React, { FC } from 'react';
import { PostType } from '../models/post.interface'; //add

import '@/styles/components/Card'

type CardProps = {
	post: PostType; //add
}

const Card: FC<CardProps> = ({ post }) => {
  
	return (
		<div className="card-component">
      <div className="card-header">
        <h2>{ post.title }</h2>
      </div>
      <div className="card-content">
        <p>{ post.title }</p>
      </div>
    </div>
	);
};

export default Card;