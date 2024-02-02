import { useDispatch } from "react-redux";
import { setPage } from "../app/slices/leftSideSlice";
import { setPage as setRightPage } from "../app/slices/rightSideSlice";

// left means the left pages => the component that will appears in the left side of the screen
const toPage = (page, left = true) => {
  const dispatch = useDispatch();
  if (left) return () => dispatch(setPage(page));
  return () => dispatch(setRightPage(page));
};

export default toPage;
