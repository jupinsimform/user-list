import { useState, useRef, useEffect } from "react";
import Trash from "../assets/trash.svg";
import { useAppDispatch } from "../redux/store/hooks";
import { setHoverdata } from "../redux/features/hoverdataSlice";
import Lock from "../assets/lock.svg";
import CardContainer from "../containers/CardContainer";
import { User, MainComponentProps } from "../types/Types";

function MainComponent({ data }: MainComponentProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const handleMouseMove = (event: React.MouseEvent<HTMLTableElement>) => {
    if (window.innerWidth <= 700) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleHover = (user: User) => {
    dispatch(setHoverdata(user));
    if (cardRef.current) {
      cardRef.current.style.display = "flex";
    }
  };
  const handleMouseLeave = () => {
    dispatch(setHoverdata(null));
    if (cardRef.current) {
      cardRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-page">
      <div className="main-page-user">
        <table className="user-table">
          <thead>
            <tr>
              <th className="py-3 ps-3 pe-5 text-left text-lg fs-5">Name</th>
              <th className="py-3 ps-3 pe-5 text-left text-lg fs-5">Status</th>
              <th className="py-3 ps-3 pe-5 text-left text-lg fs-5">Access</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item: User, i: number) => {
              return (
                <tr key={item._id}>
                  <td className="py-3 ps-4 pe-3 ">
                    <div
                      className="d-flex flex-start cursor-ponter"
                      onMouseEnter={() => handleHover(item)}
                      onMouseLeave={() => handleMouseLeave()}
                      onMouseMove={handleMouseMove}
                    >
                      <div className="w-10 h-10 me-4">
                        <img
                          className="w-10 h-10 circle"
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                      <div className="user_name">
                        <div>
                          {item.first_name} {item.last_name}
                        </div>
                        <div className="text-gray">{item.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 ps-4 pe-3">
                    {i === 0 ? (
                      <div className="text-green">Active</div>
                    ) : (
                      <select className="status py-2 px-2 text-left">
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                      </select>
                    )}
                  </td>
                  <td className="py-3 ps-4 pe-3">
                    {i === 0 ? (
                      <div className="text-gray fw-bold">Owner</div>
                    ) : (
                      <select className="access py-2 px-1 text-left">
                        {item?.role == "Manager" ? (
                          <option value="Manager">Manager</option>
                        ) : (
                          <option value="Read">Read</option>
                        )}
                      </select>
                    )}
                  </td>
                  <td className="py-3 ps-4 pe-3">
                    <button className="btn border-0">
                      {i === 0 ? (
                        <img src={Lock} alt="" />
                      ) : (
                        <img src={Trash} />
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="card-area"
        ref={cardRef}
        style={{
          maxWidth: "100%",
          ...(window.innerWidth <= 700 && {
            left: `${mousePosition.x - 130}px`,
            top: `${mousePosition.y + 150}px`,
            transition: "all 0.3s ease-in-out",
          }),
        }}
      >
        <CardContainer />
      </div>
    </div>
  );
}

export default MainComponent;
