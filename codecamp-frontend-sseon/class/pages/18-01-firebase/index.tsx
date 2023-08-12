import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseApp  } from '../../src/commons/libraries/firebase';

export default function FirebasePage(){
    const onClickSubit = () => {
        const board = collection(getFirestore(firebaseApp), "board");
        void addDoc(board, {
            writer: '철수',
            title: '제목입니다',
            contents: '내용이에요!',
        });
    };

    const onClickFetch = async () => {
        const board = collection(getFirestore(firebaseApp), "board");
        const result = await getDocs(board);
        const datas = result.docs.map(el => el.data());
        console.log(datas);
    }

    return (
        <>
            <button onClick={onClickSubit}>등록하기</button>
            <button onClick={onClickFetch}>조회하기</button>
        </>
    )
}