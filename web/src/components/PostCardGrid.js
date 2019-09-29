import React from 'react'

import PostCard from './PostCard'

const PostCardGrid = props => (
    <div class="flex flex-row flex-wrap justify-left -mx-4">
        {props.posts.map(post => (
            <div classNanme="flex-grow-0 md:w-1/3 w-full whitespace-normal px-4 mb-8">
                <PostCard post={post.node} />
            </div>
        ))}
    </div>
)

export default PostCardGrid
