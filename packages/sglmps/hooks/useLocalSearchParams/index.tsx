import { useRouter } from "next/router";

const useGlobalSearchParams = () => {
  const { query } = useRouter();
  return query;
};

export default useGlobalSearchParams;
