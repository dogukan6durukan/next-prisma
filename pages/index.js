import { Wrapper } from "../components/utils/Wrapper";
import { SuggestionForm } from "../components/SuggestionForm";
import { SuggestList } from "../components/SuggestList";
import { Warning } from "../components/utils/Warning";
import { PrismaClient } from "@prisma/client"


export default function Home({ allSuggests }) {
  
  console.log(allSuggests);

  return (
    <>
      <Wrapper>
        <SuggestionForm />
        {allSuggests.length > 0 ? <SuggestList suggests={allSuggests}/> : <Warning type="informative" text="There is no suggestion yet."/>}
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const allSuggests = await prisma.suggest.findMany();


  return {
    props : {
      allSuggests
    },
    revalidate : 5
  }
}
