import { Wrapper } from "../components/utils/Wrapper";
import { SuggestionForm } from "../components/SuggestionForm";
import { SuggestList } from "../components/SuggestList";
import { Warning } from "../components/utils/Warning";
import { PrismaClient } from "@prisma/client"


export default function Home({ req }) {
  
  console.log(req);

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
  const prisma = new PrismaClient();
  const req = await prisma.suggest.findMany();


  return {
    props : {
      req
    }
  }
  
}
