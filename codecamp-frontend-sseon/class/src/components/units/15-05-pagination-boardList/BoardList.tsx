import { IQuery } from "../../../commons/types/generated/types";

interface IBoardListPros {
  data?: Pick<IQuery, "fetchBoards">;
}

export default function BoardList(props: IBoardListPros): JSX.Element {
  console.log(props.data);
  return (
    <div>
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10xp" }}>{el.title}</span>
          <span style={{ margin: "10xp" }}>{el.contents}</span>
        </div>
      ))}
    </div>
  );
}
