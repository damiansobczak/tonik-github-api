import {useSearch} from "../../context/search";
import {useState} from "react";

const Show = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { state, dispatch } = useSearch();

  const setShow = (perPage: number) => {
    dispatch({type: "search/pagination/show", payload: perPage});
    setOpen(false);
  }

  return (
      <div className="flex items-center space-x-2">
        <p className="text-sm text-gray-600">Showing:</p>
        <div className="relative">
          <button className="border rounded-md bg-white text-sm text-gray-600 h-10 w-16 px-6 shadow-sm hover:bg-gray-50" onClick={() => setOpen(open => !open)}>{ state.show }</button>
          {open && (
              <ul className="border rounded-md shadow-md text-sm w-16 absolute top-full transform translate-y-1 bg-white">
                <li>
                  <button className="py-2 hover:bg-gray-50 w-full" onClick={() => setShow(5)}>5</button>
                </li>
                <li>
                  <button className="py-2 hover:bg-gray-50 w-full" onClick={() => setShow(10)}>10</button>
                </li>
                <li>
                  <button className="py-2 hover:bg-gray-50 w-full" onClick={() => setShow(15)}>15</button>
                </li>
              </ul>
          )}
        </div>
      </div>
  );
}

export default Show;