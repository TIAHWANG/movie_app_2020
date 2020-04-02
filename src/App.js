import React from "react";
import PropTypes from "prop-types";

function Dog({ name, picture, cuteness }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{cuteness}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    cuteness: PropTypes.number.isRequired
};

const dogILike = [
    {
        id: 1,
        name: "puppies",
        image: "http://i.ytimg.com/vi/0CwAyJ8M_BA/maxresdefault.jpg",
        cuteness: 5
    },
    {
        id: 2,
        name: "cutie",
        image:
            "https://barkingroyalty.com/wp-content/uploads/2015/12/Dalmatians-puppy.jpg",
        cuteness: 4.9
    },
    {
        id: 3,
        name: "ohmygod",
        image: "https://i.ytimg.com/vi/Wbcy-luvFJM/maxresdefault.jpg",
        cuteness: 4.8
    }
];

function App() {
    return (
        <div>
            {dogILike.map(dog => (
                <Dog
                    key={dog.id}
                    name={dog.name}
                    picture={dog.image}
                    cuteness={dog.cuteness}
                />
            ))}
        </div>
    );
}

export default App;
