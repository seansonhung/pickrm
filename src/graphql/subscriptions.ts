/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      description
      entries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      description
      entries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      description
      entries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
      id
      content
      postID
      post {
        id
        title
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
      id
      content
      postID
      post {
        id
        title
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
      id
      content
      postID
      post {
        id
        title
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
