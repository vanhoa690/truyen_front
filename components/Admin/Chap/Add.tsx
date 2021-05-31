import ChapForm from "./ChapForm"
// import CKEditorHTML from "./CKEditorHTML"

const Add = () => {

  const dataInit = {
    name: "",
    slug: "",
    storyId: null,
    description: "",
    titleSEO: "",
    descSEO: "",
    image: "",
    imageUpload: null,
    visible: true
  }

  const handleSubmit = (values: any) => {
    console.log('Form submit: ', values);
    //  let data = new FormData();
    // data.append(
    //   imageUpload, event.target.files[0]
    // )
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
  return <ChapForm dataInit={dataInit} onSubmit={handleSubmit} />
  // return <ChapForm dataInit={dataInit} onSubmit={handleSubmit} />
}
export default Add
