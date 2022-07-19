const SettingsProvider = ({ children }) => {
    const initialSettings = {
      imageCategory: "landscapes",
      imageRefreshTime: 1800000,
      quoteRefreshTime: 1800000,
      textColor: "",
    };
    const [settings, setSettings] = useLocalStorage("settings", initialSettings);
  
    return (
      <SettingsContext.Provider value={{ settings, setSettings }}>
        {children}
      </SettingsContext.Provider>
    );
  };
  
  export { useSettings, SettingsProvider };