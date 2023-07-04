import './paginition.css'
import { useContext } from "react"
import { PostsContext } from "../../context"

export const PaginitionPosts = () => {
  const {filteredPosts, setActivePageNumber}= useContext(PostsContext);
  
  if (!filteredPosts) {
    return null
    }

    const Limit = 10;
  const pagesCounts = Math.ceil(filteredPosts.length / Limit);

  const handlePagination = (evt) => {
    if (evt.target.matches("button")) {
      setActivePageNumber(evt.target.dataset.id);
    };
  };
  return(
    <div className="container ">
      <div className='page__wrapper'>

      <ul className="page_list" onClick={handlePagination} style={{marginLeft: '350px'}} >
        <li  className="page__item">
          <button className="btn btn-outline-primary">prev</button>
        </li>
        {Array(pagesCounts)
          .fill()
          .map((_, a) => (
            <li key={a} className="page__item">
              <button className="btn btn-outline-primary"  data-id={a + 1}>
                {a + 1}
              </button>
            </li>
          ))}

        <li className="">
          <button className="btn btn-outline-primary">next</button>
        </li>
      </ul>
      </div>
    </div>
  );
};