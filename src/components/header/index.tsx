import { Hammer } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-2 border-b">
        <span className="flex gap-2 items-center justify-center">
          <Hammer />
          <h1 className="font-bold text-xl">Tools</h1>
        </span>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
