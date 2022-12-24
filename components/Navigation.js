import styles from "./Navigation.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Navigation = () => {
  const { user } = useUser();

  return (
    <div className={styles.wrapper}>
      <h1>Framwork Suggestion</h1>

      <ul>
        {!user ? (
          <>
            <li>
              <a href="/api/auth/login" className={styles.btn_navigation}>Login</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/api/auth/logout" className={styles.btn_navigation}>Logout</a>
            </li>
            <li>Welcome, {user.name}.</li>

          </>

        )}
      </ul>
    </div>
  );
};
