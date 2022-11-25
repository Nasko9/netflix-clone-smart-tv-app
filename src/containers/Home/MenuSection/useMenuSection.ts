export default function useMenuSection() {
  const categories = [
    {
      id: 0,
      title: "Featured",
      programs: [
        {
          id: 0,
          title: "Program 1 - Featured",
          color: "#cfcfc4",
        },
        {
          id: 1,
          title: "Program 2 - Featured",
          color: "#dd4558",
        },
        {
          id: 2,
          title: "Program 3 - Featured",
          color: "#7ddd6a",
        },
        {
          id: 3,
          title: "Program 4 - Featured",
          color: "#dddd4d",
        },
        {
          id: 4,
          title: "Program 5 - Featured",
          color: "#8299dd",
        },
        {
          id: 5,
          title: "Program 6 - Featured",
          color: "#edab83",
        },
        {
          id: 6,
          title: "Program 7 - Featured",
          color: "#60ed9e",
        },
        {
          id: 7,
          title: "Program 8 - Featured",
          color: "#d15fb6",
        },
        {
          id: 8,
          title: "Program 9 - Featured",
          color: "red",
        },
      ],
    },
    {
      id: 1,
      title: "Tv Shows",
      programs: [
        {
          id: 0,
          title: "Program 1 - Tv Shows",
          color: "#cfcfc4",
        },
        {
          id: 1,
          title: "Program 2 - Tv Shows",
          color: "#dd4558",
        },
        {
          id: 2,
          title: "Program 3 - Tv Shows",
          color: "#7ddd6a",
        },
        {
          id: 3,
          title: "Program 4 - Tv Shows",
          color: "#dddd4d",
        },
        {
          id: 4,
          title: "Program 5 - Tv Shows",
          color: "#8299dd",
        },
        {
          id: 5,
          title: "Program 6 - Tv Shows",
          color: "#edab83",
        },
        {
          id: 6,
          title: "Program 7 - Tv Shows",
          color: "#60ed9e",
        },
        {
          id: 7,
          title: "Program 8 - Tv Shows",
          color: "#d15fb6",
        },
        {
          id: 8,
          title: "Program 9 - Tv Shows",
          color: "red",
        },
      ],
    },
    {
      id: 2,
      title: "Favorite",
      programs: [
        {
          id: 0,
          title: "Program 1 - Favorite",
          color: "#cfcfc4",
        },
        {
          id: 1,
          title: "Program 2 - Favorite",
          color: "#dd4558",
        },
        {
          id: 2,
          title: "Program 3 - Favorite",
          color: "#7ddd6a",
        },
        {
          id: 3,
          title: "Program 4 - Favorite",
          color: "#dddd4d",
        },
        {
          id: 4,
          title: "Program 5 - Favorite",
          color: "#8299dd",
        },
        {
          id: 5,
          title: "Program 6 - Favorite",
          color: "#edab83",
        },
        {
          id: 6,
          title: "Program 7 - Favorite",
          color: "#60ed9e",
        },
        {
          id: 7,
          title: "Program 8 - Favorite",
          color: "#d15fb6",
        },
        {
          id: 8,
          title: "Program 9 - Favorite",
          color: "red",
        },
      ],
    },
  ];

  const onMenuSectionFocused = ({ y }: { y: number }) => {
    window.scrollTo({ top: y - 15, behavior: "smooth" });
  };

  return { onMenuSectionFocused, categories };
}
