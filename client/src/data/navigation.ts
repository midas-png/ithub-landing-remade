interface ILink {
  label: string;
  linkTo: string;
}

export const NAVIGATION_LINKS: ILink[] = [
  {
    label: 'Поступление 2023',
    linkTo: '/ithub/enrollee',
  },
  {
    label: 'О колледже',
    linkTo: '/ithub/about',
  },
  {
    label: 'Студентам',
    linkTo: '/ithub/student',
  },
  {
    label: 'День открытых дверей',
    linkTo: '/ithub/opendays',
  },
];
