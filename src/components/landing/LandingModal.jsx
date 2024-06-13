import { useDispatch, useSelector } from "react-redux";
import { useStepActions, useStepValue } from "../../context/LandingProvider";
import LandingFirstSection from "./LandingFirstSection";
import LandingSecondSection from "./LandingSecondSection";
import LandingThirdSection from "./LandingThirdSection";
import Loading from "../../assets/loading.gif";
import { signup } from "../../redux/userSlice";

const LandingModal = () => {
  const currentStep = useStepValue();
  const actions = useStepActions();

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isLoading = useSelector(state => state.user.isLoading);

  const activeStyle = "bg-green rounded-full w-[20px] h-[20px]";
  const disabledSytle = "bg-white border-[0.5px] border-green rounded-full w-[20px] h-[20px]";

  const handleClickSkip = () => {
    dispatch(signup(user));
  };

  return isLoading ? (
    <img src={Loading} alt="로딩 중.." />
  ) : (
    <div className="bg-light-green rounded-3xl p-28 pb-20 w-1/2 m-auto shadow-xl text-center relative">
      {currentStep > 0 && (
        <span
          className="material-symbols-outlined cursor-pointer absolute top-3 left-3"
          onClick={actions.previousStep}
        >
          arrow_back
        </span>
      )}
      {currentStep === 0 ? (
        <LandingFirstSection />
      ) : currentStep === 1 ? (
        <LandingSecondSection />
      ) : (
        <LandingThirdSection />
      )}
      <div className="flex w-full gap-1 justify-center mt-8">
        <div className={currentStep === 0 ? activeStyle : disabledSytle}></div>
        <div className={currentStep > 0 ? activeStyle : disabledSytle}></div>
      </div>
      {currentStep === 1 && (
        <span
          className="text-gray text-lg cursor-pointer absolute bottom-5 right-5"
          onClick={handleClickSkip}
        >
          skip
        </span>
      )}
    </div>
  );
};

export default LandingModal;
