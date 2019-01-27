import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        let currentHeight = this.imageRef.current.clientHeight;
        console.log("CURRENT IMAGE HEIGHT:", currentHeight);


    }

    render() {
        const { description, urls: { regular } }  = this.props.image;
        return (
            <div>
                <img 
                    ref = { this.imageRef }
                    alt={ description } 
                    src={ regular } 
                />
            </div>
        )
    }
}

export default ImageCard;