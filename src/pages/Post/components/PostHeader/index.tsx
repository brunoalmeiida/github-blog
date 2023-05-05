import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { GithubLogo, CalendarBlank, ChatCircle, CaretLeft } from "phosphor-react"
import { PostList } from "../../../Blog";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
    postData: PostList
    isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    const formattedDate = relativeDateFormatter(postData?.created_at)

    return (
        <PostHeaderContainer>
            {isLoading ? (<Spinner />) : (
                <>
                    <header>
                        <ExternalLink 
                            as="button" 
                            onClick={goBack}
                            icon={<CaretLeft size={18} color="#3294F8" weight="bold" />} 
                            text="Voltar"  
                            variant="iconLeft"
                        />
                        <ExternalLink 
                            text="Ver no github" 
                            href={postData.html_url} 
                            target="_blank" 
                        />
                    </header>

                    <h1>{postData.title}</h1>

                    <ul>
                        <li>
                            <GithubLogo size={20} color="#3A536B" weight="fill" />
                            {postData.user.login}
                        </li>
                        <li>
                            <CalendarBlank size={20} color="#3A536B" weight="fill" />
                            {formattedDate}
                        </li>
                        <li>
                            <ChatCircle size={20} color="#3A536B" weight="fill" />
                            {postData.comments} comentários
                        </li>
                    </ul>
                </>
            )}            
        </PostHeaderContainer>
    )
}