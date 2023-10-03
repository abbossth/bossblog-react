export const WRITE_ARTICLE_STATUS = {
  DRAFT: "draft",
};

export const MODAL_TYPES = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  SIGN_IN_OPTIONS: "SIGN_IN_OPTIONS",
  SIGN_UP_OPTIONS: "SIGN_UP_OPTIONS",
  EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
  CODE_VERIFICATION: "CODE_VERIFICATION",
};

export const QUERY_TYPES = {
  TAB: "TAB",
  TOPIC: "TOPIC",
  RECENT_POSTS: "recentPosts",
  DRAFT_POSTS: "draftPosts",
  MODERATION_POSTS: "moderationPosts",
};

export const initialBlocks = [
  {
    id: "default-1",
    type: "header",
    data: {
      text: "Sarlavha...",
      level: 2,
    },
  },
  {
    id: "default-2",
    type: "paragraph",
    data: {
      text: "Shu yerga yozing...",
    },
  },
];

export const BLOCK_TYPES = {
  IMAGE: "image",
  PARAGRAPH: "paragraph",
  HEADER: "header",
};
