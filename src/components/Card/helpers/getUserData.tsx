import { employeeMock } from '@/pages/api/requestsMock';

export const getUserData = (id: string | string[] | undefined) => {
  const { name, email, position, avatar } = employeeMock;

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
