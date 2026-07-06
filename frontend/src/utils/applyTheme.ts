export const applyTheme = (theme: {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  cardColor: string;
  buttonColor: string;
  buttonTextColor: string;
}) => {
  const root = document.documentElement;

  root.style.setProperty("--background-color", theme.backgroundColor);
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--secondary-color", theme.secondaryColor);
  root.style.setProperty("--text-color", theme.textColor);
  root.style.setProperty("--card-color", theme.cardColor);
  root.style.setProperty("--button-color", theme.buttonColor);
  root.style.setProperty("--button-text-color", theme.buttonTextColor);
};