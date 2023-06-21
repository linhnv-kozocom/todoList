import ListHeader from "../components/ListHeader";

const homepage = () => {
  return (
    <div className="container">
      <div className="p-10 bg-slate-500/25 mt-20 rounded-md">
        <ListHeader listName="Holiday tick list" />
      </div>
    </div>
  );
};

export default homepage;
