import React from "react";

import Comment from "./Comment";

const commentData = [
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [
      {
        name: "juno",
        text: "All Is Well said by a wise man who doesn't know how the world works",
        replies: [
          {
            name: "juno",
            text: "All Is Well said by a wise man who doesn't know how the world works",
            replies: [
              {
                name: "juno",
                text: "All Is Well said by a wise man who doesn't know how the world works",
                replies: [
                  {
                    name: "juno",
                    text: "All Is Well said by a wise man who doesn't know how the world works",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [
      {
        name: "juno",
        text: "All Is Well said by a wise man who doesn't know how the world works",
        replies: [
          {
            name: "juno",
            text: "All Is Well said by a wise man who doesn't know how the world works",
            replies: [
              {
                name: "juno",
                text: "All Is Well said by a wise man who doesn't know how the world works",
                replies: [
                  {
                    name: "juno",
                    text: "All Is Well said by a wise man who doesn't know how the world works",
                    replies: [
                      {
                        name: "juno",
                        text: "All Is Well said by a wise man who doesn't know how the world works",
                        replies: [
                          {
                            name: "juno",
                            text: "All Is Well said by a wise man who doesn't know how the world works",
                            replies: [
                              {
                                name: "juno",
                                text: "All Is Well said by a wise man who doesn't know how the world works",
                                replies: [
                                  {
                                    name: "juno",
                                    text: "All Is Well said by a wise man who doesn't know how the world works",
                                    replies: [
                                      {
                                        name: "juno",
                                        text: "All Is Well said by a wise man who doesn't know how the world works",
                                        replies: [
                                          {
                                            name: "juno",
                                            text: "All Is Well said by a wise man who doesn't know how the world works",
                                            replies: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [],
  },
  {
    name: "juno",
    text: "All Is Well said by a wise man who doesn't know how the world works",
    replies: [],
  },
];

const CommentList = ({ data }) => {
  return (
    <div>
      {data.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="ml-5 border-l ">
            <CommentList data={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Comments = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl ml-8 my-6">Comments:</h1>
      <div className="ml-8 ">
        <CommentList data={commentData} />
      </div>
    </div>
  );
};

export default Comments;
