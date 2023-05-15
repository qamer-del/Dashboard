import { ref } from 'vue';

export interface ISimpleTableData {
  city: string;
  totalOrders: string;
}

export interface IPaginatedTableData {
  picture: string;
  name: string;
  role: string;
  created: string;
  status: string;
  statusColor: string;
}

export interface IWideTableData {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export function useTableData() {
  const simpleTableData = ref<ISimpleTableData[]>([
    { city: 'Dammam', totalOrders: '200,120' },
    { city: 'Khrtoum', totalOrders: '632,310' },
    { city: 'Madin', totalOrders: '451,110' },
    { city: 'Mekkeh', totalOrders: '132,524' },
  ]);

  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        'https://media.istockphoto.com/id/643297838/photo/urban-landscape-view-of-the-lens.jpg?s=612x612&w=is&k=20&c=RYnge9QBVVt5cuajkPlklyaoDqS8vwrNBMQoubDPoHY=',
      name: 'Gamer Ibrahim',
      role: 'Admin',
      created: 'May 1, 2023',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
      name: 'Motasim mujaghd',
      role: 'Editor',
      created: 'Jan 01, 2023',
      status: 'Active',
      statusColor: 'green',
    },
    {
      picture:
        'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      name: 'Pedri Gonzales',
      role: 'Editor',
      created: 'Jan 10, 2023',
      status: 'Suspended',
      statusColor: 'orange',
    },
    {
      picture:
        'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
      name: 'Amna Omer ',
      role: 'Admin',
      created: 'Jan 18, 2023',
      status: 'Inactive',
      statusColor: 'red',
    },
  ]);

  const wideTableData = ref<IWideTableData[]>(
    [...Array(10).keys()].map(() => ({
      name: 'Ahmed Khalid',
      email: 'Khalid@example.com',
      title: 'Software Engineer',
      title2: 'Web designer',
      status: 'Active',
      role: 'Supervispor',
    }))
  );

  return {
    simpleTableData,
    paginatedTableData,
    wideTableData,
  };
}
