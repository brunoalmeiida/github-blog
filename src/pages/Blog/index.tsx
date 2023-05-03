import { Post } from "./components/Post";
import { SearchInput } from "./components/SearchInput";
import { Profile } from "./components/profile";
import { PostsListsContainer } from "./styles";

export function Blog() {
    return (
        <div>
            <Profile />
            <SearchInput />

            <PostsListsContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </PostsListsContainer>
        </div>
    )
}