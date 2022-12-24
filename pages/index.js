import { Wrapper } from "../components/utils/Wrapper";
import { SuggestionForm } from "../components/SuggestionForm";
import { SuggestList } from "../components/SuggestList";
import { Warning } from "../components/utils/Warning";

export default function Home({ suggests }) {
  
  console.log(suggests);

  return (
    <>
      <Wrapper>
        <SuggestionForm />
        {/* {suggests.length > 0 ? <SuggestList suggests={suggests}/> : <Warning type="informative" text="There is no suggestion yet."/>} */}
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/getsuggests");
  const suggests = await req.json();

  return {
    props : {
      suggests
    }
  }
}
