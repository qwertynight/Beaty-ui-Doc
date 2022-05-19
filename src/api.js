export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Этот npm-пакет клевый",
      username: "Алихан",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-10T10:00:33.010+02:00",
    },
    {
      id: "2",
      body: "я за Алихана",
      username: "Адиль",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-10T10:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Согласен",
      username: "Бексултан",
      userId: "2",
      parentId: "1",
      createdAt: "2022-05-10T10:00:33.010+02:00",
    },
    {
      id: "4",
      body: "я тоже",
      username: "Эльдар",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-10T10:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Alihan",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
