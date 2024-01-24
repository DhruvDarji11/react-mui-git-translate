import { useSelector } from "../redux/store";

const useFetch = () => {
  //   const [data, setData] = useState(null);
  const value = useSelector((state) => state.persist);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, [url]);

  return value;
};

export default useFetch;
