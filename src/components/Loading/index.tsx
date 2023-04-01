import {Container} from './styles'
import ImgLoading from '../../assets/img/loading.png'

export function Loading(){
    return (
       <Container>
        <img src={ImgLoading} alt="" />
       </Container>
    )
}