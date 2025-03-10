import { useLocale } from "../providers/LocaleProvider";
import styles from "../styles/StartComponent.module.scss"

export default function StartComponent() {

  const { translations } = useLocale();

  return (
    <div className={styles.startComponent}>
      {translations.ui_back}
    </div>
  );
}
