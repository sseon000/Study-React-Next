import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

interface IApolloSettingProps {
    children: JSX.Element
}
export default function ApolloSetting(props: IApolloSettingProps) {
    const uploadLink = createUploadLink({
        uri: "http://practice.codebootcamp.co.kr/graphql",
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        // uri: "http://practice.codebootcamp.co.kr/graphql",
        // uri: "http://backend09.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache()
    })
    
    // prettier-ignore
    return (
        <ApolloProvider client={client}> 
            {props.children}
        </ApolloProvider>
    )
}