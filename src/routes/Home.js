import React from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import Movie from "../Components/Movie";
import GlobalStyle from "../Styles/GlobalStyle";
import theme from "../Styles/Theme";

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
`;

const LoaderText = styled.span`
    font-size: 25px;
`;

const Movies = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 70px;
`;

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Container>
                    {isLoading ? (
                        <Loader>
                            <LoaderText>Loading...</LoaderText>
                        </Loader>
                    ) : (
                        <Movies>
                            {movies.map((m) => {
                                return (
                                    <Movie
                                        key={m.id}
                                        id={m.id}
                                        year={m.year}
                                        title={m.title}
                                        summary={m.summary}
                                        poster={m.medium_cover_image}
                                        genres={m.genres}
                                    />
                                );
                            })}
                        </Movies>
                    )}
                </Container>
            </ThemeProvider>
        );
    }
}

export default Home;
