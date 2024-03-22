// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    struct UserProfile {
        string username;
        string bio;
        string profileImageHash; // IPFS hash of the profile image
        address[] followers;
        address[] following;
    }

    mapping(address => UserProfile) public users;

    event UserRegistered(address indexed user, string username);
    event UserProfileUpdated(
        address indexed user,
        string bio,
        string profileImageHash
    );
    event UserFollowed(address indexed follower, address indexed following);
    event UserUnfollowed(address indexed follower, address indexed unfollowing);

    function registerUser(string memory _username) external {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(
            users[msg.sender].followers.length == 0,
            "User already registered"
        );

        users[msg.sender].username = _username;
        emit UserRegistered(msg.sender, _username);
    }

    function updateProfile(
        string memory _bio,
        string memory _profileImageHash
    ) external {
        UserProfile storage userProfile = users[msg.sender];
        userProfile.bio = _bio;
        userProfile.profileImageHash = _profileImageHash;
        emit UserProfileUpdated(msg.sender, _bio, _profileImageHash);
    }

    function followUser(address _following) external {
        require(_following != msg.sender, "Cannot follow yourself");
        users[msg.sender].following.push(_following);
        users[_following].followers.push(msg.sender);
        emit UserFollowed(msg.sender, _following);
    }

    function unfollowUser(address _unfollowing) external {
        address[] storage followingList = users[msg.sender].following;
        address[] storage followersList = users[_unfollowing].followers;

        for (uint256 i = 0; i < followingList.length; i++) {
            if (followingList[i] == _unfollowing) {
                followingList[i] = followingList[followingList.length - 1];
                followingList.pop();
                break;
            }
        }

        for (uint256 i = 0; i < followersList.length; i++) {
            if (followersList[i] == msg.sender) {
                followersList[i] = followersList[followersList.length - 1];
                followersList.pop();
                break;
            }
        }

        emit UserUnfollowed(msg.sender, _unfollowing);
    }
}