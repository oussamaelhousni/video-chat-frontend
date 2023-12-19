import { useDispatch } from "react-redux";
import { setPage } from "../app/slices/leftSideSlice";
import { setPage as setRightPage } from "../app/slices/rightSideSlice";

const toPage = (page, left = true) => {
  const dispatch = useDispatch();
  if (left) return () => dispatch(setPage(page));
  return () => dispatch(setRightPage(page));
};

export default toPage;
