// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Post {
    struct PostData {
        uint256 postId;
        address author;
        string contentHash; // IPFS hash of the post content
        uint256 timestamp;
        uint256 likes;
        address[] comments;
    }

    PostData[] public posts;

    event PostCreated(
        address indexed author,
        uint256 indexed postId,
        string contentHash,
        uint256 timestamp
    );
    event PostLiked(address indexed liker, uint256 indexed postId);
    event PostCommented(
        address indexed commenter,
        uint256 indexed postId,
        string commentHash
    );

    function createPost(string memory _contentHash) external {
        uint256 postId = posts.length;
        PostData memory newPost = PostData(
            postId,
            msg.sender,
            _contentHash,
            block.timestamp,
            0,
            new address[](0)
        );
        posts.push(newPost);
        emit PostCreated(msg.sender, postId, _contentHash, block.timestamp);
    }

    function likePost(uint256 _postId) external {
        require(_postId < posts.length, "Post does not exist");
        posts[_postId].likes++;
        emit PostLiked(msg.sender, _postId);
    }

    function commentOnPost(
        uint256 _postId,
        string memory _commentHash
    ) external {
        require(_postId < posts.length, "Post does not exist");
        posts[_postId].comments.push(msg.sender);
        emit PostCommented(msg.sender, _postId, _commentHash);
    }
}
