import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { SearchInput } from "./components/SearchInput";
import { Profile } from "./components/profile";
import { PostsListsContainer } from "./styles";
import { api } from "../../components/lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME
export interface PostList {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: string;
    user: {
        login: string;
    }
}

export function Blog() {
    const [posts, setPosts] = useState<PostList[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getPosts = useCallback(async (query: string = "") => {
        try {
            setIsLoading(true)
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
            setPosts(response.data.items)
        } finally {
            setIsLoading(false)
        }
    }, [posts])

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <Profile />
            <SearchInput getPosts={getPosts} postsLength={posts.length} />

            {isLoading ? ( <Spinner />) : (
                <PostsListsContainer>
                    {posts.map((post) => {
                        return (
                            <Post key={post.number} post={post} />
                        )
                    })}
                </PostsListsContainer>
            )}
        </div>
    )
}