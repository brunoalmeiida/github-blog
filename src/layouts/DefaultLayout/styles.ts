import styled from "styled-components";

export const LayoutContainer = styled.div`
    > main {
        margin: 0 auto;
        width: 100%;
        max-width: 54rem;

        @media (max-width: 54rem) {
            padding: 0 1rem;
        }
    }
`