import React, { FunctionComponent, useEffect } from "react";
import "./Listing.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchTopFreeListing,
  selectTopFreeListing,
  fetchSuggestions,
  selectSuggestions,
  selectSearch,
  setSearchField,
} from "./listingSlice";

const Listing: FunctionComponent = () => {
  const listing = useAppSelector(selectTopFreeListing);
  console.log("listing api", listing);

  const suggestions = useAppSelector(selectSuggestions);
  console.log("suggestions api", suggestions);

  const search = useAppSelector(selectSearch);
  console.log("search field", search);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopFreeListing());
  }, []);

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, []);

  //   const searchApp = listing.filter((item) => {
  //     return (
  //     item["im:name"].label.includes(search));
  //   });

  // const searchApp = listing.filter((item) => (
  //     item["im:name"].label.includes(search))
  // )

  const searchFreeApp =
    search.length > 0
      ? listing.filter((item) =>
          item["im:name"].label.toLowerCase().includes(search.toLowerCase())
        )
      : listing;
  console.log("searchFreeApp", searchFreeApp);

  //   const searchSuggestApp = suggestions.filter((item) =>
  //     item["im:name"].label.includes(search)
  //   );

  const searchSuggestApp =
    search.length > 0
      ? suggestions.filter((item) =>
          item["im:name"].label.toLowerCase().includes(search.toLowerCase())
        )
      : suggestions;

  console.log("searchSuggestApp", searchSuggestApp);

  return (
    <>
      <div className="HeaderBar">
        <input
          className="SearchField"
          type="text"
          placeholder="尋找App Store的應用程式？輸入程式名稱"
          onChange={(event) => {
            console.log("event.target.value", event.target.value);

            dispatch(setSearchField(event.target.value));
          }}
          value={search}
        />
      </div>

      <h3> 《最新推介》 </h3>
      <div className="SuggestionsSessionOuter">
        {searchSuggestApp.map((item, index) => {
          console.log("item", item);
          console.log("item idx", index);
          return (
            <div className="SuggestionsItemOuter">
              <div className="SuggestedAppIconOuter">
                <img
                  className="SuggestedAppIcon"
                  src={item["im:image"][0].label}
                />
              </div>

              <div className="SuggestionsDetails">
                <div className="SuggestedAppName">{item["im:name"].label} </div>

                <div className="SuggestedAppCategory">
                  {item.category.attributes.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="FreeAppOuter">
        <h3> 《熱門排行榜》 </h3>
        {searchFreeApp.map((item, index) => {
          console.log("item", item);
          console.log("item idx", index);
          return (
            <div key={item.id.label} className="ListingItemOuter">
              <div className="FreeAppRanking"> {index + 1} </div>
              <img className="ListingIcon" src={item["im:image"][0].label} />

              <div className="ListingDetails">
                <div> {item["im:name"].label} </div>

                <div className="FreeAppCategory">
                  {item.category.attributes.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listing;
