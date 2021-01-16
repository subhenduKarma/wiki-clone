import { setSearchFocus } from "./searchBar";
import { gerSearchTerm } from "./dataFunction";

document.addEventListner("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  //3 listners

  //1listner on form
  const form = document.gerElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

//proceural "workflow" function
const submitTheSearch = (event) => {
  event.preventDefault();
  //delete search results
  ProcessTheSearch();
  setSearchFocus();
};

//procedural
const ProcessTheSearch = async () => {
  //clear the stats line
  const searchTerm = gerSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
};
