import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  let items = [
    "TYTOfGodness",
    "TYTOfGodness1",
    "TYTOfGodness2",
    "TYTOfGodness3",
    "TYTOfGodness4",
  ];

  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleSelectItem = (item) => {
    console.log(item);
  };

  const handleClick = () => {
    console.log("Clicked me");
    setAlertVisibility(true);
  };

  const dismissMessage = () => {
    console.log("Dismissed message");
    setAlertVisibility(false);
  };

  //<ListGroup
  //      items={items}
  //      heading="Names"
  //      onSelectItem={handleSelectItem}
  //    />

  return (
    <div>
      {alertVisibility && <Alert onClick={dismissMessage}>Hello World</Alert>}
      <Button onClick={handleClick}>Clicked me</Button>
    </div>
  );
}

export default App;
