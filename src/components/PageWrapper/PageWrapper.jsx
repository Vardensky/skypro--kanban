import { Wrapper } from "./PageWrapper.styled"

const PageWrapper = ({children}) =>{
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default PageWrapper