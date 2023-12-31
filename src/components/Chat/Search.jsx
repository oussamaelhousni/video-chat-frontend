import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import classNames from "classnames";
import { IoMdPersonAdd } from "react-icons/io";
import { BiBlock } from "react-icons/bi";
import { IoPersonRemove } from "react-icons/io5";
import { CgUnblock } from "react-icons/cg";
import { MagnifyingGlass } from "react-loader-spinner";
import { LuUserCheck2 } from "react-icons/lu";

const fakeData = [
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: true,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
  {
    fullName: "Oussama Elhousni",
    isFriend: true,
    isBlocked: false,
    profilePicture: "",
    isPending: true,
  },
];
const SearchRecord = ({ data }) => {
  return (
    <li className="flex items-center justify-between p-6 bg-[#2d3436] border-b border-[black]">
      <div className="flex items-center">
        <img
          src={
            data.profilePicture
              ? data.profilePicture
              : "https://fastly.picsum.photos/id/652/200/200.jpg?hmac=m_Z74HS-9l6n785rv5t2r3riTmdwuq-Z0rMJz9iHg5g"
          }
          className="aspect-square w-[4rem] rounded-full"
          alt=""
        />
        <h3 className="text-white ms-4 font-ubuntu text-md font-semibold">
          {data.fullName}
        </h3>
      </div>
      <div className="flex gap-4">
        {!data.isPending ? (
          data.isFriend ? (
            <button className="bg-[#0984e3] py-2 px-4 font-ubuntu capitalize text-white text-sm rounded-sm flex justify-center items-center border-none outline-none hover:opacity-90">
              Unfriend <IoPersonRemove className="inline-block ms-2 text-lg" />
            </button>
          ) : (
            <button className="bg-[#0984e3] py-2 px-4 font-ubuntu capitalize text-white text-sm rounded-sm flex justify-center items-center border-none outline-none hover:opacity-90">
              Add user <IoMdPersonAdd className="inline-block ms-2 text-lg" />
            </button>
          )
        ) : (
          <button className="bg-[#10ac84] py-2 px-4 font-ubuntu capitalize text-white text-sm rounded-sm flex justify-center items-center border-none outline-none hover:opacity-90">
            Accept <LuUserCheck2 className="inline-block ms-2 text-lg" />
          </button>
        )}
        {!data.isBlocked ? (
          <button className="bg-red-500 py-2 px-4 font-ubuntu capitalize text-white text-sm rounded-sm">
            block <BiBlock className="inline-block ms-2 text-lg mt-[-3px]" />
          </button>
        ) : (
          <button className="bg-red-500 py-2 px-4 font-ubuntu capitalize text-white text-sm rounded-sm">
            Unblock{" "}
            <CgUnblock className="inline-block ms-2 text-lg mt-[-3px]" />
          </button>
        )}
      </div>
    </li>
  );
};
const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  function debounce(func, timeout = 750) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      setIsLoading(true);
      if (!args[0].target.value) {
        setResults([]);
        setIsLoading(false);
        return;
      }
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const handleSearch = useCallback(
    debounce((e) => {
      axios
        .get(`http://localhost:8080/api/v1/users?search=${e.target.value}`)
        .then((response) => {
          setResults(response.data.data.users);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }, 1000),
    []
  );

  return (
    <div className="h-screen w-screen bg-black bg-opacity-50 fixed left-0 top-0 z-10 flex flex-col items-center">
      <div className="w-8/12 md:w-1/2 flex flex-col">
        <div className="mt-8 bg-[white] p-4 bg-opacity-100 font-ubuntu mb-4">
          <input
            type="text"
            placeholder="search a friend by name or email"
            className="bg-transparent w-full h-full block focus:outline-none"
            onChange={handleSearch}
          />
        </div>

        <ul
          className={classNames(
            "flex flex-col bg-black overflow-auto h-[80vh]",
            { "items-center justify-center": isLoading }
          )}
        >
          {isLoading && (
            <MagnifyingGlass
              glassColor="#c0efff"
              color="#576574"
              height={100}
              width={100}
            />
          )}
          {results.length === 0 ? (
            <h3>No result found</h3>
          ) : (
            !isLoading &&
            results.map((record) => {
              return <SearchRecord data={record} key={record._id} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
