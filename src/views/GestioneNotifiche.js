import React, { useState } from "react";
import { styled } from "@mui/system";
import { Typography, Switch } from "@mui/material";

const SettingsPageContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px",
});

const SettingsSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flex: 1,
});

const SettingsItem = styled("div")({
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  padding: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

const SwitchContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});

const GestioneNotifiche = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    enableNotifications: true,
    enableSound: true,
    enableVibration: false,
  });

  const handleSwitchChange = (event, settingName) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      [settingName]: event.target.checked,
    }));
  };

  return (
    <SettingsPageContainer>
      <SettingsSection>
        <SettingsItem>
          <Typography variant="h6">Impostazioni Notifiche</Typography>
          <SwitchContainer>
            <Typography>Abilita Notifiche</Typography>
            <Switch
              checked={notificationSettings.enableNotifications}
              onChange={(event) =>
                handleSwitchChange(event, "enableNotifications")
              }
            />
          </SwitchContainer>
        </SettingsItem>
        <SettingsItem>
          <Typography variant="h6">Suono</Typography>
          <SwitchContainer>
            <Typography>Abilita Suono</Typography>
            <Switch
              checked={notificationSettings.enableSound}
              onChange={(event) => handleSwitchChange(event, "enableSound")}
            />
          </SwitchContainer>
        </SettingsItem>
        <SettingsItem>
          <Typography variant="h6">Vibrazione</Typography>
          <SwitchContainer>
            <Typography>Abilita Vibrazione</Typography>
            <Switch
              checked={notificationSettings.enableVibration}
              onChange={(event) =>
                handleSwitchChange(event, "enableVibration")
              }
            />
          </SwitchContainer>
        </SettingsItem>
      </SettingsSection>
      <SettingsSection>
        <SettingsItem>
          <Typography variant="h6">Altre Impostazioni</Typography>
          <Typography>Impostazione 1</Typography>
          <Typography>Impostazione 2</Typography>
          <Typography>Impostazione 3</Typography>
        </SettingsItem>
      </SettingsSection>
    </SettingsPageContainer>
  );
};

export default GestioneNotifiche;
