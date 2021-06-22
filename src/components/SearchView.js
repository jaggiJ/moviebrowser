import Hero from "./Hero";

// TMBD API KEY = 

const SearchView = ({keyword, searchResult}) => {
  const title = `Searching for ${keyword}`
  console.log('Our searchResults are', searchResult)
  return (
    <>
     <Hero text={title} />
    </>
  );
};

export default SearchView;
