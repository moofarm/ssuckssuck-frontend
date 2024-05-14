import BabyMussuk from "../assets/baby_mussuk.svg";
import { privacyPolicyLink, serviceIntroLink, termsOfUseLink } from "../utils/url";
import { openWindowNewTab } from "../utils/window";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-end w-full h-1/5 bg-light-green p-5">
      <div>
        <div className="flex g-1 items-center">
          <svg className="" width="30" height="30" viewBox="0 0 500 550">
            <BabyMussuk />
          </svg>
          <h1 className="text-green">쑥쑥쑥</h1>
        </div>
        <a href="mailto:skdudddl0712@gmail.com" className="cursor-pointer hover:text-green">
          Contact &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; skdudddl0712@gmail.com
        </a>
        <p>© 2024. moofarm all rights reserved.</p>
      </div>
      <div className="flex gap-5">
        <p
          className="cursor-pointer hover:text-green"
          onClick={() => openWindowNewTab(termsOfUseLink)}
        >
          이용약관
        </p>
        <p
          className="cursor-pointer hover:text-green"
          onClick={() => openWindowNewTab(privacyPolicyLink)}
        >
          개인정보처리방침
        </p>
        <p
          className="cursor-pointer hover:text-green"
          onClick={() => openWindowNewTab(serviceIntroLink)}
        >
          서비스소개
        </p>
      </div>
    </footer>
  );
};
