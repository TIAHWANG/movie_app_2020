import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../Styles/Theme";

const MovieContainer = styled.div`
    width: 45%;
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 70px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: ${(props) => props.theme.boxShadow};
    a {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        text-decoration: none;
        color: inherit;
    }
`;

const MovieImage = styled.div`
    position: relative;
    top: -50px;
    max-width: 20%;
    margin-right: 30px;
    box-shadow: ${(props) => props.theme.boxShadow};
`;

const Image = styled.img`
    width: 100%;
    display: block;
`;

const MovieData = styled.div`
    width: 70%;
`;

const Title = styled.h5`
    margin: 0;
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
`;
const Year = styled.h6`
    margin: 0;
    font-weight: 300;
    margin-right: 10px;
`;
const Summary = styled.p``;
const Genres = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin: 5px 0px;
`;
const GenreList = styled.li`
    margin-right: 10px;
`;

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <MovieContainer>
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                    },
                }}
            >
                <MovieImage>
                    <Image src={poster} title={title} alt={title} />
                </MovieImage>
                <MovieData>
                    <Title>{title.length > 25 ? `${title.slice(0, 25)}...` : title}</Title>
                    <Year>{year}</Year>
                    <Genres>
                        {genres.map((genre, index) => {
                            return <GenreList key={index}>{genre}</GenreList>;
                        })}
                    </Genres>
                    <Summary>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}...</Summary>
                </MovieData>
            </Link>
        </MovieContainer>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
