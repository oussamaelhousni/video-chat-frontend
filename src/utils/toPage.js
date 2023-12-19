import { useDispatch } from "react-redux";
import { setPage } from "../app/slices/leftSideSlice";

const toPage = (page) => {
  const dispatch = useDispatch();
  return () => dispatch(setPage(page));
};

export default toPage;
