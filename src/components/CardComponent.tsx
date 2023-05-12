import { memo } from "react";
import { CardProps } from "../types/Types";

function CardComponent({ hoverdata }: CardProps) {
  return (
    <div className="user-card">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img className="profile mt-4" src={hoverdata?.avatar} alt="" />
        <div
          className={`mt-3 fw-bold nameOfProfile ${
            hoverdata?.active ? "profileActive" : "profileInactive"
          }`}
        >
          {`${hoverdata?.first_name} ${hoverdata?.last_name}`}
        </div>
        <div className="my-2 text-gray">{hoverdata?.email}</div>
        <div className=" mb-2 plan">Your Plan: Standard</div>
        <div>
          <button className="active-users py-2 px-5 fw-bold">
            {hoverdata?.active ? "Active User" : "Inactive User"}
          </button>
        </div>
      </div>
      <div className="d-flex mx-3 flex-start flex-column">
        <div className="pt-4">
          <div className="mb-1 fw-bolder">Plan Uses</div>
          <progress value="65" max="100"></progress>
        </div>
        <div className="d-flex my-4">
          <div>
            <div className="fs-4 fw-bold">2,450</div>
            <div className="text-gray fs-6">clicks reviewed</div>
          </div>
          <div className="vr mx-3"></div>
          <div>
            <div className="fs-4 fw-bold">5000</div>
            <div className="text-gray fs-6">Monthly clicks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardComponent);
