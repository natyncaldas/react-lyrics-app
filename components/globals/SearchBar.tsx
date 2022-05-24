import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.input`
    width: 500px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    border-width: 0px;
    padding: 0 10px 0 10px;
    font-size: 18px;
    font-weight: 500px;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();

    const handleKeyPress = (key: string) => {
        if(key === 'Enter'){
            router.push(`/lyrics?search=${searchText}`)
            setSearchText('');
        }
    } 

    return (
        <SearchContainer 
            value={searchText} 
            onChange={(e)=>setSearchText(e.target.value)} 
            onKeyDown={e=>handleKeyPress(e.key)}
            placeholder='Search for lyrics'
        />
    )
}

export default SearchBar;