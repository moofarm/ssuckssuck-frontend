import Calendar from "./Calendar";

const JoinRoom = () => {
  return (
    <div className="long-modal-content">
      {/* 새로운 컴포넌트 */}
      <h2 className="text-xl">미션 기간</h2>
      <div className="flex flex-col items-end mr-5 ">
        <div className="flex flex-row my-2">
          <p className="text-lg">완료일</p>
          &emsp;
          <Calendar />
        </div>
        <label className="text-base my-2">
          <input type="checkbox" /> 미정
        </label>
      </div>

      <h2 className="text-xl">미션 횟수</h2>
      <p className="text-sm my-2">일주일에 몇 번 미션을 하실 건가요?</p>
      <div className="mt-2 mb-8">
        <input type="radio" id="2" name="number" value="2" checked />
        <span className="text-base">2회이하</span>&ensp;
        <input type="radio" id="3" name="number" value="3" checked />
        <span className="text-base">3회이상</span>&ensp;
        <input type="radio" id="5" name="number" value="5" checked />
        <span className="text-base">5회이상</span>&ensp;
        <input type="radio" id="7" name="number" value="7" checked />
        <span className="text-base">매일</span>
      </div>
      {/* 다른 컴포넌트나 요소들도 추가 가능합니다. */}
    </div>
  );
};

export default JoinRoom;
