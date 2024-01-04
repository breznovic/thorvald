import { TitleType } from "../../common/types/types";

export const Header = (props: TitleType) => {
  return (
    <div>
      <header>{props.title}</header>
    </div>
  );
};
