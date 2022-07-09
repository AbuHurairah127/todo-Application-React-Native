import {useDispatch} from 'react-redux';
import {deleteAll} from '../../store/actions/todoAction';

const useHeader = () => {
  const dispatch = useDispatch();
  const onDeleteAllHandler = () => {
    console.log('deleteAll');
    dispatch(deleteAll());
  };
  return {onDeleteAllHandler};
};

export default useHeader;
