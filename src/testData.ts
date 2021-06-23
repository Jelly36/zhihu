export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number
}

export const testDatas: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这里是test1的专栏，有一段非常有意思的简介，可以更新一下喔',
    avatar:
      'https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16',
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这里是test2的专栏，有一段非常有意思的简介，可以更新一下喔',
    avatar:
      'https://user-center.cdn.bcebos.com/head/raw/uc.101.1b1d2eda.zn5K9zt_t5fghr6kh8ZHuw?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=16',
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这里是test3的专栏，有一段非常有意思的简介，可以更新一下喔',
  },
]
export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: 'Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.',
    image: require('@/assets/logo.png'),
    createdAt: '2021-06-21 10:34:22',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我的第二文章',
    content: 'Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.',
    image: require('@/assets/logo.png'),
    createdAt: '2021-06-21 10:34:22',
    columnId: 2
  },
  {
    id: 3,
    title: '这是我的第三篇文章',
    content: 'Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.',
    image: require('@/assets/logo.png'),
    createdAt: '2021-06-21 10:34:22',
    columnId: 3
  },
  {
    id: 4,
    title: '这是我的第四篇文章',
    content: 'Since Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.',
    image: '',
    createdAt: '2021-06-21 10:34:22',
    columnId: 4
  },
  {
    id: 5,
    title: '这是我的第五篇文章',
    content: 'tSince Bootstrap is developed to be mobile first, we use a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.',
    image: require('@/assets/logo.png'),
    createdAt: '2021-06-21 10:34:22',
    columnId: 5
  }
]
