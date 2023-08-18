import { useDispatch } from "react-redux";
import { setSearchTerm } from "redux/searchSlice";

function useSerchUpdate() {
    const dispatch=useDispatch();

    const updateSearchTerm = (newSearchTerm: string) => {
        dispatch(setSearchTerm(newSearchTerm));
    };

    return { updateSearchTerm, };
}

export default useSerchUpdate;