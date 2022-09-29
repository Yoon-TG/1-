import {Col, Figure} from 'react-bootstrap';

function Menu2({data}){

    return(
        <Col onClick={()=>{
            window.open(`https://uglyus.co.kr/ustore/+${data.srcNum}`);
        }}> 
            <Figure>
                <Figure.Image
                    width={300}
                    height={300}
                    alt="171x180"
                    src={data.imgPath}
                />
                <p><span>{data.region}</span></p>
                <p>{data.itemName}</p>
                <p><span id="percent">{data.per}</span> {data.price}원</p>
            </Figure>
        </Col>
    )
}

export default Menu2;