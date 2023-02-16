import React, { useEffect, useState } from "react";
import  HeroSimplified  from '../HeroSimplified/HeroSimplified.js'
import { useParams } from "react-router";
import { searchHeroesByName } from '../../requests.js'
import './SearchView.css';
import Loader from "../Loader/Loader.js";

function SearchView() {
    const [ searchList, setSearchContent ] = useState([]);
    const [ isLoading, setLoadingState] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        setLoadingState(true);
        searchHeroesByName(name).then(searchResults => {
            const { data } = searchResults;

            if (data.error) {
                return;
            }

            const { results } = data;
            setSearchContent(results);
            setLoadingState(false);
        });
    },[name])

    return (
        <>
        { !isLoading && 
            (<section className="search">
                {searchList.map(({name,powerstats,image, id}) => <HeroSimplified key={id} name={name} imgUrl={image.url} powerStats={powerstats} id={id}/>)}
            </section>)
        } { isLoading && <div className="loader-container"><Loader /></div> }
        </>
    );
}

export default SearchView;