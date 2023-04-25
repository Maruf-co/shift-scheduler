// Shift Sign Up
export const shiftSignUpMock = [
  {
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    id: 'h982uhd9uhiod2i3',
    cards: [
      {
        id: 'qwdweqqdsqq1',
        available: 1,
        shiftName: 'Tue, Apr 25, 2023 7:00 PM (4 hours)',
        scheduledDate: '25.04.2023',
        startTime: '19:00',
        endTime: '23:00',
        capacity: '3',
        booked: [
          {
            id: '2dj3odj4oidcjnk45joiojk3',
            name: 'Erzhan',
            avatar:
              'https://lh3.googleusercontent.com/VHYKdRiESsEx-xYQXTZ8j8WOEGqffuUmv_u9V-11Dva_Ju4ZcXNgb86t7NlIb2E=w600',
          },
          {
            id: 'fuyh2iuhgc98y23dc',
            name: 'User2',
            avatar:
              'https://lh3.googleusercontent.com/wTAniTaEVtPNE30zbwhKk4vUl8pmRCzBWODd_04m9giDevVeSPcTwprLKb-mow8=w600',
          },
        ],
      },
      {
        id: 'qwdweqqdsqq2',
        available: 2,
        shiftName: 'Wed, Apr 26, 2023 3:00 PM (4 hours)',
        scheduledDate: '26.04.2023',
        startTime: '15:00',
        endTime: '19:00',
        capacity: '3',
        booked: [
          {
            id: 'fuyh2iuhgc98y23dc2',
            name: 'User3',
            avatar:
              'https://lh3.googleusercontent.com/OR005uKRmR0b9rVtO0MxE7woRaeWnN7Syp08sPw0iSpDP4UmghdEWg8eKBscTkph=w600',
          },
        ],
      },
      {
        id: 'qwdweqqdsqq3',
        available: 0,
        shiftName: 'Wed, Apr 26, 2023 11:00 AM (4 hours)',
        scheduledDate: '26.04.2023',
        startTime: '11:00',
        endTime: '15:00',
        capacity: '3',
        booked: [],
      },
    ],
  },

  {
    locationName: 'Location South',
    logo: 'https://lh3.googleusercontent.com/EA6ZGhkVVjHWhZfaweGgiWsRCY5h3TSDjgVmnyIaD9anqoR6ynZdy-T8z-YtWJ4=w600',
    id: 'h982uhd9uhiod2i4',
    cards: [
      {
        id: 'wekrhfcoqwh3r6',
        available: 1,
        shiftName: 'Wed, Apr 26, 2023 5:00 PM (4 hours)',
        scheduledDate: '26.04.2023',
        startTime: '17:00',
        endTime: '21:00',
        capacity: '3',
        booked: [
          {
            id: 'h2i93uhdnj2i3uoje',
            name: 'User 9',
            avatar:
              'https://lh3.googleusercontent.com/DzHqq0dzbwL-YunTWr_gyu7-_CBgjGj8ZDptG3AaC4yeEctxiP-dmC0nUCcZKA=w600',
          },
          {
            id: 'h2i93uhdnj2i3uojf',
            name: 'User 10',
            avatar:
              'https://lh3.googleusercontent.com/Np_EI1WoJjDcLLvF25Xeyt0xqVpcmechS2PcOd3T-baLQj-TU_hlQ-V5rw0EZyI=w600',
          },
        ],
      },
      {
        id: 'wekrhfcoqwh3r7',
        available: 3,
        shiftName: 'Thu, Apr 27, 2023 8:00 AM (3 hours)',
        scheduledDate: '27.04.2023',
        startTime: '8:00',
        endTime: '11:00',
        capacity: '3',
        booked: [],
      },
      {
        id: 'wekrhfcoqwh3r8',
        available: 2,
        shiftName: 'Sun, Apr 30, 2023 9:00 PM (4 hours)',
        scheduledDate: '30.04.2023',
        startTime: '21:00',
        endTime: '01:00',
        capacity: '2',
        booked: [],
      },
    ],
  },
];

// Organization
export const organizationMock = [
  {
    id: 'h982uhd9uhiod2i3',
    name: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    location: '1757 Market St, Denver, CO',
    shifts: [
      {
        startDate: '20.07.2021',
        startTime: '19:00',
        endTime: '23:00',
        capacity: '3',
        repeatDays: ['Monday', 'Tuesday', 'Wednesday'],
      },
      {
        startDate: '02.08.2021',
        startTime: '15:00',
        endTime: '19:00',
        capacity: '3',
        repeatDays: ['Wednesday'],
      },
      {
        startDate: '02.08.2021',
        startTime: '11:00',
        endTime: '15:00',
        capacity: '3',
        repeatDays: ['Monday', 'Tuesday', 'Wednesday'],
      },
    ],
  },
  {
    id: 'h982uhd9uhiod2i4',
    name: 'Location South',
    logo: 'https://lh3.googleusercontent.com/EA6ZGhkVVjHWhZfaweGgiWsRCY5h3TSDjgVmnyIaD9anqoR6ynZdy-T8z-YtWJ4=w600',
    location: '1391 Delaware St, Denver, CO',
    shifts: [
      {
        startDate: '23.01.2023',
        startTime: '17:00',
        endTime: '21:00',
        capacity: '3',
        repeatDays: ['Monday', 'Tuesday', 'Wednesday'],
      },
      {
        startDate: '04.06.2022',
        startTime: '8:00',
        endTime: '11:00',
        capacity: '3',
        repeatDays: ['Wednesday', 'Thursday'],
      },
      {
        startDate: '12.10.2022',
        startTime: '21:00',
        endTime: '01:00',
        capacity: '2',
        repeatDays: ['Saturday', 'Sunday'],
      },
    ],
  },
];

// Cover Requests
export const coverRequestsMock = [
  {
    id: 'ghdfiugiuy2diyh2',
    shiftName: 'Thu, Apr 27, 2023 7:00 AM (4 hours)',
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    currentOwner: {
      id: 'jhoudhuio2h398yhd89i2d',
      name: 'User 6',
      avatar:
        'https://lh3.googleusercontent.com/EgDeVncO4zhlqpfZBFCbcXJc8Cyh4GQ1wpbgi0hKDBILdbvJhn8RSMHLG4GuncI=w600',
    },
  },
  {
    id: 'ghdfiugiuy2diyh3',
    shiftName: 'Thu, Apr 27, 2023 3:00 AM (4 hours)',
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    currentOwner: {
      id: 'h2i93uhdnj2i3uojf',
      name: 'User 10',
      avatar:
        'https://lh3.googleusercontent.com/Np_EI1WoJjDcLLvF25Xeyt0xqVpcmechS2PcOd3T-baLQj-TU_hlQ-V5rw0EZyI=w600',
    },
  },
  {
    id: 'ghdfiugiuy2diyh4',
    shiftName: 'Wed, Apr 26, 2023 3:00 PM (4 hours)',
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    currentOwner: {
      id: '2dj3odj4oidcjnk45joiojk3',
      name: 'Erzhan',
      avatar:
        'https://lh3.googleusercontent.com/VHYKdRiESsEx-xYQXTZ8j8WOEGqffuUmv_u9V-11Dva_Ju4ZcXNgb86t7NlIb2E=w600',
    },
  },
  {
    id: 'ghdfiugiuy2diyh5',
    shiftName: 'Wed, Apr 26, 2023 7:00 PM (4 hours)',
    locationName: 'Location South',
    logo: 'https://lh3.googleusercontent.com/EA6ZGhkVVjHWhZfaweGgiWsRCY5h3TSDjgVmnyIaD9anqoR6ynZdy-T8z-YtWJ4=w600',
    currentOwner: {
      id: 'h2i93uhdnj2i3uoje',
      name: 'User 9',
      avatar:
        'https://lh3.googleusercontent.com/DzHqq0dzbwL-YunTWr_gyu7-_CBgjGj8ZDptG3AaC4yeEctxiP-dmC0nUCcZKA=w600',
    },
  },
];

// My Shifts
export const myShiftsMock = [
  {
    id: 'ghdfiugiuy2diyh5',
    shiftName: 'Tue, Apr 25, 2023 11:00 PM (4 hours)',
    date: 'Apr 25, 2023',
    locationName: 'Location South',
    logo: 'https://lh3.googleusercontent.com/EA6ZGhkVVjHWhZfaweGgiWsRCY5h3TSDjgVmnyIaD9anqoR6ynZdy-T8z-YtWJ4=w600',
    employee: 'User 1',
  },
  {
    id: 'wekrhfcoqwh3r3',
    shiftName: 'Wed, Apr 26, 2023 7:00 PM (4 hours)',
    date: 'Apr 26, 2023',
    locationName: 'Location South',
    logo: 'https://lh3.googleusercontent.com/EA6ZGhkVVjHWhZfaweGgiWsRCY5h3TSDjgVmnyIaD9anqoR6ynZdy-T8z-YtWJ4=w600',
    employee: 'User 2',
  },
  {
    id: 'qwdweqqdsqq1',
    shiftName: 'Mon, Apr 31, 2023 7:00 PM (4 hours)',
    date: 'Apr 31, 2023',
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    employee: 'User 6',
  },
  {
    id: 'qwdweqqdsqq3',
    shiftName: 'Tue, Apr 25, 2023 9:00 AM (4 hours)',
    date: 'Apr 25, 2023',
    locationName: 'Location North',
    logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
    employee: 'User 5',
  },
];

// Employer
export const employerMock = {
  id: 'org_cjwikoj23oi4jicxujk',
  name: 'User 1',
  email: 'default666@mail.com',
  position: 'Field Manager',
  avatar:
    'https://lh3.googleusercontent.com/_ZEqqZVL-S21SPTlxWDguICVDTi1gdtIRKpx8fistamSDnNSdA2Er_FXsPbnvF8=w600',
  organization: 'Location North',
  logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
};

// Users
export const usersListMock = [
  {
    id: 'h2i93uhdnj2i3uojd',
    name: 'User 8',
    email: 'userbog45@mail.com',
    position: 'Staff',
    avatar:
      'https://lh3.googleusercontent.com/La9qvCnjTNvuUCt3P8W4PfFNYUmnd0cSV5qXDmO4oN5fFtKUm17zt34z9f23fxo=w600',
  },
  {
    id: 'h2i93uhdnj2i3uoje',
    name: 'User 9',
    email: 'ilostmyday23@mail.com',
    position: 'Staff',
    avatar:
      'https://lh3.googleusercontent.com/DzHqq0dzbwL-YunTWr_gyu7-_CBgjGj8ZDptG3AaC4yeEctxiP-dmC0nUCcZKA=w600',
  },
  {
    id: 'h2i93uhdnj2i3uojf',
    name: 'User 10',
    email: 'aaa4a44aa@mail.com',
    position: 'Staff',
    avatar:
      'https://lh3.googleusercontent.com/Np_EI1WoJjDcLLvF25Xeyt0xqVpcmechS2PcOd3T-baLQj-TU_hlQ-V5rw0EZyI=w600',
  },
];

// ClockIn
export const ClockInListMock = [
  {
    userId: 'wioejufhweuiofh3',
    name: 'Erzhan',
    avatar:
      'https://lh3.googleusercontent.com/VHYKdRiESsEx-xYQXTZ8j8WOEGqffuUmv_u9V-11Dva_Ju4ZcXNgb86t7NlIb2E=w600',
    shiftName: 'Sat, Apr 25, 2023 7:00 AM (4 hours)',
    shiftId: 'ifuhbgwieujfhniwue8',
  },
  {
    userId: 'wioejufhweuiofh4',
    name: 'User7',
    shiftName: 'Sat, Apr 25, 2023 7:00 AM (4 hours)',
    avatar:
      'https://lh3.googleusercontent.com/EgDeVncO4zhlqpfZBFCbcXJc8Cyh4GQ1wpbgi0hKDBILdbvJhn8RSMHLG4GuncI=w600',
    shiftId: 'ifuhbgwieujfhniwue9',
  },
  {
    userId: 'h2i93uhdnj2i3uojd',
    name: 'User 8',
    avatar:
      'https://lh3.googleusercontent.com/La9qvCnjTNvuUCt3P8W4PfFNYUmnd0cSV5qXDmO4oN5fFtKUm17zt34z9f23fxo=w600',
    shiftName: 'Sat, Apr 25, 2023 7:00 AM (4 hours)',
    shiftId: 'ifuhbgwieujfhniwue0',
  },
];

export const postShiftMock = {
  id: '2ae85211',
  name: 'Location North',
  logo: 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
  location: '1757 Market St, Denver, CO',
  startDate: '20.07.2021',
  startTime: '15:00',
  endTime: '16:00',
  capacity: '1',
};

const a = {
  capacity: '8',
  endTime: '21:48',
  location: 'sdfdsfsdfsdfsdf',
  logo: 'https://ya.ru',
  name: 'asdasddasd',
  startDate: '2023-04-13',
  startTime: '09:49',
};
