import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Chocolate",
      imageUrl:
        "https://thewiremagazine.com/wp-content/uploads/2022/07/chocolateWhiteDark-454384771-770x533-1.jpg",
    },
    {
      id: 2,
      title: "Soft Toys",
      imageUrl:
        "https://images.bauerhosting.com/legacy/media/5f3b/f517/4074/8e14/5649/10b8/teddies.jpg?q=80&w=850&ar=16:9&fit=crop&crop=top",
    },
    {
      id: 3,
      title: "Bouquets",
      imageUrl: "https://i.ibb.co/jf3Rwvj/indian-bsiness.png",
    },
    {
      id: 4,
      title: "For Him",
      imageUrl: "https://i.ibb.co/cy7SqR9/indian-bsiness.png",
    },
    {
      id: 5,
      title: "For Her",
      imageUrl: "https://i.ibb.co/MD4Xq3Z/indian-bsiness.png",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
