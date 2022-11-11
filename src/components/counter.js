import { CREATE_COUNT} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter)
    
    const countMore = () => {
        dispatch(CREATE_COUNT);
    }

    return (
        <>
        <h1>{`Счет: ${counter}`}</h1>
        <button onClick={countMore}>Нажми на кнопку, чтобы увеличить счёт</button>
        </>
    )
}
export default Counter;