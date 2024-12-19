import loaderToggler from "./loader";

const request = async (resource) => {
  loaderToggler(true);
  const req = await fetch(resource);
  if (!req.ok) {
    loaderToggler(false);
    throw new Error("Somethinh went wrong :(");
  }
  const data = await req.json();
  loaderToggler(false);

  return data;
};

export default request;
