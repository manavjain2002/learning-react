import { ReactNode, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const [message, setMessage] = useState("")
  const [buttonType, setButtonType] = useState("")

  const displayAlert = (buttonType: string, message: string): ReactNode => {
    return <Alert color={buttonType}>{getMessage(buttonType) + ": " + message}</Alert>;
  };

  const getMessage = (buttonType: string): string => {
    if (buttonType == "primary") {
      return "Success";
    }

    if (buttonType == "secondary") {
      return "Info";
    }

    if (buttonType === "warning") {
      return "Warning";
    }

    return "Failed";
  };

  const showAlert = (buttonType: string, message: string) => {
    setShouldDisplay(true);
    setMessage(message);
    setButtonType(buttonType);
  }

  return (
    <div>
      {shouldDisplay && displayAlert(buttonType, message)}
      <Button
        color="danger"
        text="Show alert"
        onClick={showAlert}
      />
    </div>
  );
}
export default App;
