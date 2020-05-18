import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    margin: 0 auto;
    margin-top: 100px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    width: 50%;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const DetailImage = styled.div`
    width: 50%;
    align-self: center;
    margin-bottom: 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Image = styled.img`
    width: 100%;
    display: block;
`;

const DetailData = styled.div``;

const Title = styled.h5`
    font-weight: 600;
    font-size: 24px;
    color: #2c2c2c;
    margin-bottom: 20px;
`;

const Year = styled.h6`
    font-weight: 600;
`;

const Summary = styled.p``;

const Genres = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
`;

const GenreList = styled.li`
    margin-right: 10px;
    font-size: 14px;
`;

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const STATE = location.state;
            return (
                <DetailContainer>
                    <DetailImage>
                        <Image src={STATE.poster} title={STATE.title} alt={STATE.title} />
                    </DetailImage>
                    <DetailData>
                        <Title>{STATE.title}</Title>
                        <Year>{STATE.year}</Year>
                        <Genres>
                            {STATE.genres.map((genre, index) => {
                                return <GenreList key={index}>{genre}</GenreList>;
                            })}
                        </Genres>
                        <Summary>{STATE.summary}</Summary>
                    </DetailData>
                </DetailContainer>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
