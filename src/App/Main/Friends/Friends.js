import s from "./Friends.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Friend from "./Friend/Friend";

const Friends = props => {
  const pagesCount = Math.ceil(props.totalUsers / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.Friends}>
      <h2>Friends</h2>
      <div className={s.pages}>
        {pages.map(p => {
          {
            if (p <= 25) {
              return (
                <span
                  onClick={() => {
                    props.onPageChange(p);
                  }}
                  key={p}
                  className={p === props.currentPage ? s.currentPage : s.page}>
                  {p}
                </span>
              );
            }
          }
        })}
      </div>
      {props.isFetching ? <Preloader /> : null}
      <Friend
        users={props.users}
        unfollow={props.unfollow}
        follow={props.follow}
      />
    </div>
  );
};

export default Friends;
