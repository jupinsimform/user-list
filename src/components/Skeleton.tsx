import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const temp: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
function SkeletonCard() {
  return (
    <>
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
          {temp.map((i: number) => {
            return (
              <tr key={i}>
                <td className="py-3 ps-4 pe-3 ">
                  <div className="d-flex flex-start cursor-ponter">
                    <div className="w-10 h-10 me-4">
                      <Skeleton height={40} width={40} borderRadius={50} />
                    </div>
                    <div className="user_name">
                      <div>
                        <Skeleton height={15} width={150} />
                      </div>
                      <div className="text-gray">
                        <Skeleton height={15} width={200} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 ps-4 pe-3">
                  <Skeleton height={40} width={120} />
                </td>
                <td className="py-3 ps-4 pe-3">
                  <Skeleton height={40} width={120} />
                </td>
                <td className="py-3 ps-4 pe-3">
                  <Skeleton height={40} width={40} borderRadius={10} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SkeletonCard;
