/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  description: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateEntryInput = {
  id?: string | null,
  content: string,
  postID: string,
};

export type ModelEntryConditionInput = {
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEntryInput = {
  id: string,
  content?: string | null,
  postID?: string | null,
};

export type DeleteEntryInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEntryMutationVariables = {
  input: CreateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type CreateEntryMutation = {
  createEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEntryQueryVariables = {
  id: string,
};

export type GetEntryQuery = {
  getEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEntrysQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntrysQuery = {
  listEntrys:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      content: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    entries:  {
      __typename: "ModelEntryConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEntrySubscription = {
  onCreateEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry:  {
    __typename: "Entry",
    id: string,
    content: string,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
