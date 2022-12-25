import { Wrapper } from "../components/utils/Wrapper";
import { SuggestionForm } from "../components/SuggestionForm";
import { SuggestList } from "../components/SuggestList";
import { Warning } from "../components/utils/Warning";
import useSWR from 'swr';

export default function Home({ allSuggests }) {

  const { data, error } = useSWR('/api/getsuggests', fetcher);

  if(!data) return 'Loading...';

  return (
    <>
      <Wrapper>
        <SuggestionForm />
        {data.length > 0 ? <SuggestList suggests={data}/> : <Warning type="informative" text="There is no suggestion yet."/>}
      </Wrapper>
    </>
  );
}

const fetcher = async () => {
  const data = await fetch('https://next-prisma-blond.vercel.app/api/getsuggests')
  const result = await data.json();
  return result;

}
