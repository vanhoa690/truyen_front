import { useRouter } from 'next/router'
import ChapForm from "./ChapForm"

const handleSubmit = (values: any) => {
  console.log('Form submit: ', values);
  // return new Promise(resolve => {

  //   setTimeout(() => {
  //     if (isAddMode) {
  //       const newPhoto = {
  //         ...values,
  //         id: randomNumber(10000, 99999),
  //       }
  //       const action = addPhoto(newPhoto);
  //       console.log({ action });
  //       dispatch(action);
  //     } else {
  //       // Do something here
  //       const action = updatePhoto(values);
  //       dispatch(action);
  //     }

  //     history.push('/photos');
  //     resolve(true);
  //   }, 2000);
  // });
}
const editChap = {
  name: "One Piece",
  slug: "one-piece",
  storyId: 1,
  description: "Hay doc truyen One Piece",
  titleSEO: "SEO Title One Pice",
  descSEO: "Desc",
  image: "onepiave.jpg",
  visible: true
}

const Edit = () => {

  const router = useRouter()
  const { id } = router.query
  // const isAddMode = false;
  // console.log(isAddMode)

  // const initialValues = isAddMode
  //   ? dataInit
  //   : editChap;

  return <ChapForm dataInit={editChap} onSubmit={handleSubmit} />
}
export default Edit
