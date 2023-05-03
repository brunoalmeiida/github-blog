import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { GithubLogo, Buildings, Users } from "phosphor-react";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/brunoalmeiida.png" />

            <ProfileDetails>
                <header>
                    <h1>Bruno Almeida</h1>

                    <ExternalLink text="GitHub" href="#" />
                </header>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <ul>
                    <li>
                        <GithubLogo size={20} color="#3A536B" weight="fill" />
                        brunoalmeiida
                    </li>
                    <li>
                        <Buildings size={20} color="#3A536B" weight="fill" />
                        Rocketseat
                    </li>
                    <li>
                        <Users size={20} color="#3A536B" weight="fill" />
                        33 seguidores
                    </li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}