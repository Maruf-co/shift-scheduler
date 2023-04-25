import { usersListMock } from '@/pages/api/requestsMock';

export const getUserData = (id: string | string[] | undefined) => {
  const card = usersListMock.find((item) => id === item.id);
  const { name, email, position, avatar } = card || usersListMock[0];

  const data = {
    logo: avatar,
    cardList: [
      {
        title: 'Name',
        value: name,
      },
      {
        title: 'Email',
        value: email,
      },
      {
        title: 'Position',
        value: position,
      },
    ],
  };

  return data;
};
