let myHeaders = new Headers();
const getoptions = {
  method: "GET",
  headers: myHeaders,
  cache: "default"
};
const postOptiions = {
  method: "POST",
  headers: myHeaders,
  cache: "default"
};

const fetchOptions = {
  getoptions: getoptions,
  postOptiions: postOptiions
};

export default fetchOptions;
