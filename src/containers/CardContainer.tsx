import { useAppSelector } from "../redux/store/hooks";
import { RootState } from "../redux/store/store";
import CardComponent from "../components/CardComponent";

const CardContainer = () => {
  const hoverdata = useAppSelector(
    (state: RootState) => state.hoverdata.hoverdata
  );
  return <CardComponent hoverdata={hoverdata} />;
};

export default CardContainer;
