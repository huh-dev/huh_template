import { useLocale } from "../providers/LocaleProvider";

export default function StartComponent() {

  const { translations } = useLocale();

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px'
    }}>
      {translations.ui_back}
    </div>
  );
}
