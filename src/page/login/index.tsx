import { Button } from "../../components/Button";
import styles from "./index.module.css";

export const LoginPage = () => {
  return (
    <>
      <div className={styles.pageTitle}>
        <h2>LOGIN</h2>
      </div>
      <div className={styles.loginBtn}>
        <Button color="brown" text="パスワードを入力してアクセス" />
      </div>
    </>
  );
};
