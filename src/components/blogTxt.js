import {Card} from 'react-bootstrap';

function blogTxt({data}){


    return(
        console.log(data.text)
        // <Card className="bg-white text-light">
        //     <Card.Img src={data.imgPath} />
        //     <Card.ImgOverlay>
        //         <Card.Text>
        //         {data.text}
        //         </Card.Text>
        //     </Card.ImgOverlay>
        // </Card>
    )
}

export default blogTxt;