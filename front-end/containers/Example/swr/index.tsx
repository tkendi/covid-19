import useSWR from "swr";

//api
import { getKorea } from "api/Korea/Get";

const ExampleSwr = () => {
  //   const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("http://locahost:8000/api/korea", getKorea);

  if (!data) {
    console.log("delay");
  } else {
    console.log(data);
  }

  if (error) console.error(error);
  return <></>;
};

export default ExampleSwr;
