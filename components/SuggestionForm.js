import styles from "./Suggestion.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Warning } from "./utils/Warning";
import { useRef } from "react";

export const SuggestionForm = () => {
  const { user, isLoading } = useUser();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
        name: nameRef.current.value,
        email : emailRef.current.value,
        title : titleRef.current.value,
        description : descriptionRef.current.value
    };

    if (
      titleRef !== "" &&
      descriptionRef !== "" &&
      nameRef !== "" &&
      emailRef != ""
    ) {

      try {
        const req = await fetch("/api/createsuggest", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
          });
    
          console.log(await req.json());
          
          titleRef.current.value = '';
          descriptionRef.current.value = '';
    
      } catch (err) {
        console.log(err);
        throw new Error('Request failed!');
      } 

    }
  };

  return (
    <>
     {user && 
        <div style={{ padding: "1rem" }}>
        <form className={styles.form} onSubmit={submitHandler}>
          <h2>Suggestion Form</h2>

          <input type="hidden" value={user.name} ref={nameRef} />
          <input type="hidden" value={user.email} ref={emailRef} />

          <div>
            <label>Framwork - Language name</label>
            <input type="text" ref={titleRef} />
          </div>

          <div>
            <label>Why do you suggest it?</label>
            <textarea ref={descriptionRef}></textarea>
          </div>

          <button>Add</button>
        </form>
        </div>
     }
    </>

   
  );
};
