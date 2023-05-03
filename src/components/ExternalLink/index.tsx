import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";
import { ArrowSquareOut } from "phosphor-react"

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> &{
    text: string;
    icon?: ReactNode;
    variant?: "iconLeft";
}

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
    return (
        <ExternalLinkContainer {...rest}>
            {text}
            {icon ?? <ArrowSquareOut size={15} weight="bold" />}
        </ExternalLinkContainer>
    )
}