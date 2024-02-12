import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { categoriesData } from "../../Static/static";
import styles from "../../Styles/Style";

const FilterDropDown = ({ page }) => {
  const [filters, setFilters] = useState();
  const [scroll, setScroll] = useState(false);
  const [searches, setSearches] = useState();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const searchesOld = searchParam.get("categories");

  useEffect(() => {
    if (searchesOld) {
      const serachModified = searchesOld?.replace(/\-/g, " ");
      const searchSlug = serachModified?.split(",");
      setSearches(
        searchSlug?.map((i, inex) => i.charAt(0).toUpperCase() + i.slice(1))
      );
    } else {
      setSearches(null);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 86) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [searchParam]);
  const handelchech = (event, i) => {
    const searchSlug = searchesOld?.split(",");
    const fKey = i.title.replace(/\s/g, "-");
    let tite = "";
    if (searchesOld) {
      tite = searchesOld + "," + i.title.replace(/\s/g, "-");
    } else {
      tite = i.title.replace(/\s/g, "-");
    }
    if (event.target.checked) {
      if (!searchSlug?.includes(fKey)) {
        if (page === "product") {
          navigate(`/product?categories=${tite}`);
        } else {
          navigate(`/best-selling?categories=${tite}`);
        }
        // navigate(`/product?categories=${tite}`);
      }
    } else {
      const filteredArray = searchSlug?.filter(
        (element) => element.replace(/\-/g, " ") !== i.title
      );
      const url = JSON.stringify(filteredArray).replace(/\[|\]|\"/g, "");
      if (page === "product") {
        navigate(`/product?categories=${url}`);
      } else {
        navigate(`/best-selling?categories=${url}`);
      }
      // navigate(`/product?categories=${url}`);
    }
  };

  return (
    <div
      className={`${
        scroll ? "fixed top-[70px]" : "absolute top-[0px]"
      }  flex-[1]  bottom-0 left-0 w-[200px] overflow-y-scroll h-[115%] bg-white`}
    >
      {searches && (
        <div className="flex flex-col items-center justify-center">
          <div className="headOne w-11/12 p-2">
            <h2>Filters</h2>
          </div>
          <hr className="w-11/12  border-[1px] border-[#ada9a9]" />
          <div className="filters flex flex-wrap ">
            {searches?.map((i, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-1 justify-center items-center cursor-pointer py-[4px] m-2 w-fit px-3 rounded-full border-[2px] border-gray-600"
                >
                  {i}
                  <RxCross2
                    onClick={() => {
                      const removeFilter = searches.filter(
                        (element) => element !== i
                      );
                      setSearches(removeFilter);
                      if (removeFilter) {
                        const url = JSON.stringify(removeFilter)
                          .replace(/\s+/g, "-")
                          .replace(/\[|\]|"/g, "");
                        if (page === "product") {
                          navigate(`/product?categories=${url}`);
                        } else {
                          navigate(`/best-selling?categories=${url}`);
                        }
                      } else {
                        if (page === "product") {
                          navigate(`/product`);
                        } else {
                          navigate(`/best-selling`);
                        }
                      }
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col w-11/12 ">
            <h2 className="p-2">Catagories</h2>
            <hr className="w-full border-[1px] border-[#ada9a9]" />
          </div>

          {categoriesData?.map((i, index) => {
            const serachModified = searchesOld?.replace(/\-/g, " ");
            const searchSlug = serachModified?.split(",");
            return (
              <div key={index} className="px-4 w-full">
                <label
                  className="flex w-full flex-row"
                  htmlFor={`catogires-${index}`}
                >
                  <input
                    checked={searchSlug?.includes(i.title)}
                    onChange={(e) => {}}
                    onClick={(event) => handelchech(event, i)}
                    type="checkbox"
                  />
                  <h4 className="w-10/12 m-2 p-[1px]">{i.title}</h4>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropDown;
