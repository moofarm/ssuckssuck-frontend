import { UserInfo } from "./UserInfo";

export const Header = () => {
  let firstMenu = window.location.pathname === "/" ? "나의미션방보기" : "모든미션방보기";
  const menus = [firstMenu, "방만들기"];
  return (
    <header className="fixed top-0 left-0 w-full h-[8vh] flex justify-between items-center p-8 bg-white">
      <div className="flex gap-6 items-baseline">
        <h1 className="text-3xl text-dark-green font-nps-bold cursor-pointer hover:animate-pulse">
          쑥쑥쑥
        </h1>
        {menus.map((menu, idx) => {
          return (
            <nav key={idx} className="hover:text-dark-green hover:font-nps-bold cursor-pointer">
              {menu}
            </nav>
          );
        })}
      </div>
      <div className="flex items-center gap-5">
        <span className="material-symbols-outlined cursor-pointer text-3xl">search</span>
        <UserInfo />
      </div>
    </header>
  );
};
