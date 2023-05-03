import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { GithubLogo, CalendarBlank, ChatCircle, CaretLeft } from "phosphor-react"

export function PostHeader() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return (
        <PostHeaderContainer>
            <header>
                <ExternalLink 
                    as="button" 
                    onClick={goBack}
                    icon={<CaretLeft size={18} color="#3294F8" weight="bold" />} 
                    text="Voltar"  
                    href="#" 
                    variant="iconLeft"
                />
                <ExternalLink 
                    text="Ver no github" 
                    href="#" 
                    target="_blank" 
                />
            </header>

            <h1>JavaScript data types and data structures</h1>

            <ul>
                <li>
                    <GithubLogo size={20} color="#3A536B" weight="fill" />
                    cameronwll
                </li>
                <li>
                    <CalendarBlank size={20} color="#3A536B" weight="fill" />
                    Há 1 dia
                </li>
                <li>
                    <ChatCircle size={20} color="#3A536B" weight="fill" />
                    5 comentários
                </li>
            </ul>
        </PostHeaderContainer>
    )
}