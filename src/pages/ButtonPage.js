import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          Button 1
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Button 2
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Button 3
        </Button>
      </div>
      <div>
        <Button warning outline>
          Button 4
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Button 4
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
