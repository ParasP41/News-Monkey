import React from 'react'
import NewsData from './NewsData'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {

    const [article, setArticle] = useState([]);
    const [totalArticles, setTotalArticles] = useState();
    const [page, setPage] = useState(1);

    const handlerData = async () => {
        // let key = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=71dbc848d129491588b607a267851f82&page=${page}`;
        let key = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f14a718242654c2c846389e3210891c8&page=${page}`;
        props.setProgress(20)
        let res = await fetch(key);
        props.setProgress(60)
        let parse = await res.json();
        props.setProgress(100)
        setArticle(parse.articles);
        setTotalArticles(parse.totalResults);
    }


    const handlerNext = async () => {
        // let key = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=71dbc848d129491588b607a267851f82&page=${page}`;
        let key = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f14a718242654c2c846389e3210891c8&page=${page + 1}`;
        setPage(page + 1);
        let res = await fetch(key);
        let parse = await res.json();
        setArticle(article.concat(parse.articles));
        setTotalArticles(parse.totalResults);
    }

    useEffect(() => {
        handlerData();
    }, []);

    return (
        <>
            <InfiniteScroll
                dataLength={article.length}
                next={handlerNext}
                hasMore={article.length !== totalArticles}
                loader={<Spinner />}
            >
                <div className='md:grid md:grid-cols-4' style={props.DarkBody}>
                    {article.map((item, index) => {
                        return (<div key={index}>
                            <NewsData urlImg={item.urlToImage} source={item.source.name ? item.source.name.slice(0, 25) : "Unknow Source"} author={item.author ? item.author.slice(0, 25) : "XYZ-Reporter"} title={item.title} description={item.description} url={item.url} date={item.publishedAt}></NewsData>
                        </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}


