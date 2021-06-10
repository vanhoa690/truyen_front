import ChapForm from "./ChapForm"
import UploadImageForm from "./UploadImageForm"
import UploadMutilImageForm from "./UploadMutilImageForm"
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

  const dataImageInit = {
    imageUpload: null
  }
  const dataMutilImageInit = {
    imageMutilUpload: null
  }

  const handleSubmit = (values: any) => {
    console.log("Form submit: ", values)
    //  let data = new FormData();
    // data.append(
    //   imageUpload, event.target.files[0]
    // )
  }

  const handleUploadImage = (values: any) => {
    console.log("Form Image Upload: ", values)
    let data = new FormData()
    data.append("imageUpload", values.imageUpload)
    console.log("Data Form Image Upload: ", data)
  }

  const handleUploadMutilImage = (values: any) => {
    console.log("Form Image Upload: ", values)
    // let data = new FormData()
    // data.append("imageUpload", values.imageUpload)
    // console.log("Data Form Image Upload: ", data)
  }

  return (
    <>
      <ChapForm dataInit={dataInit} onSubmit={handleSubmit} />
      <UploadImageForm dataInit={dataImageInit} onSubmit={handleUploadImage} />

      <UploadMutilImageForm
        dataInit={dataMutilImageInit}
        onSubmit={handleUploadMutilImage}
      />
    </>
  )
}
export default Add
