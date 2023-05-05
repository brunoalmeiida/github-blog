import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { GithubLogo, Buildings, Users } from "phosphor-react";
import { api } from "../../../../components/lib/axios";
import { Spinner } from "../../../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
}

export function Profile() {
    const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
    const [isLoading, setIsLoading] = useState(true)

    const getProfileData = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await api.get(`/users/${username}`)
            setProfileData(response.data)
        } finally {
            setIsLoading(false)
        }
    }, [profileData])

    useEffect(() => {
        getProfileData()
    }, [])

    return (
        <ProfileContainer>
            {isLoading ? <Spinner /> : (
                <>
                    <ProfilePicture src={profileData.avatar_url} />

                    <ProfileDetails>
                        <header>
                            <h1>{profileData.name}</h1>

                            <ExternalLink text="GitHub" href={profileData.html_url} target="_blank" />
                        </header>

                        <p>{profileData.bio}</p>

                        <ul>
                            <li>
                                <GithubLogo size={20} color="#3A536B" weight="fill" />
                                {profileData.login}
                            </li>
                            {profileData?.company && (
                                <li>
                                    <Buildings size={20} color="#3A536B" weight="fill" />
                                    {profileData.company}
                                </li>
                            )}
                            <li>
                                <Users size={20} color="#3A536B" weight="fill" />
                                {profileData.followers}
                            </li>
                        </ul>
                    </ProfileDetails>
                </>
            )}
        </ProfileContainer>
    )
}