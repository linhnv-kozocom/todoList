import { FC } from "react";

interface ListHeaderProps {
  listName: string;
}

const ListHeader: FC<ListHeaderProps> = ({ listName }) => {
  return (
    <div className="text-3xl text-center p-2 bg-gradient-to-r from-indigo-500/75 via-purple-500/75 to-pink-500/50">
      <p className="text-white uppercase font-semibold">{listName}</p>
    </div>
  );
};

export default ListHeader;
