import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards"> | undefined, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    const onLoadMore = () => {
        if(data === undefined) return;
        if(data.fetchBoards === undefined || !data.fetchBoards) return;

        void fetchMore({
            variables: {page: Math.ceil(data.fetchBoards.length / 10) + 1},
            updateQuery : (prev, {fetchMoreResult}): Pick<IQuery, "fetchBoards"> | undefined => {
                if(prev === undefined) return;
                if(!prev.fetchBoards) return;
                if(fetchMoreResult === undefined) return;
                if(!fetchMoreResult) return;

                if(!fetchMoreResult.fetchBoards) {
                    return {
                        fetchBoards: [...prev?.fetchBoards],
                    }
                };

                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
                };   
            }
        })
    }

    return(
        <div style={{height: "500px", overflow: "auto"}}>
            <InfiniteScroll 
                pageStart={0} 
                loadMore={onLoadMore} 
                hasMore={true} 
                useWindow={false}
            >
                {data?.fetchBoards?.map(el => {
                return <div key={el.number}>
                            <span style={{margin: '10px'}}>{el.writer}</span>
                            <span style={{margin: '10px'}}>{el.title}</span>
                        </div>
                }) ?? <div></div>}
            </InfiniteScroll>
        </div>
    )
}