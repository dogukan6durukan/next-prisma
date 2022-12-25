import { Wrapper } from "../components/utils/Wrapper";
import { SuggestionForm } from "../components/SuggestionForm";
import { SuggestList } from "../components/SuggestList";
import { Warning } from "../components/utils/Warning";
import useSWR from "swr";

export default function Home({ allSuggests }) {
  const { data, error } = useSWR("/api/getsuggests", fetcher);
  data && data.reverse();


  return (
    <>
      <Wrapper>
        <SuggestionForm />
        {!data ? (
          <p>Loading Suggests...</p>
        ) : data.length > 0 ? (
          <SuggestList suggests={data} />
        ) : (
          <Warning type="informative" text="There is no suggestion yet." />
        )}
      </Wrapper>
    </>
  );
}

const fetcher = async () => {
  const data = await fetch(
    "https://next-prisma-blond.vercel.app/"
  );
  const result = await data.json();
  return result;
};
