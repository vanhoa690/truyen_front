export default {
  pickFile(ref: any) {
    ref.click()
  },

  onFilePicked(e: any) {
    return new Promise((resolve, reject) => {
      const files = e.target.files
      if (files[0] !== undefined) {
        if (files[0].name.lastIndexOf(".") <= 0) {
          reject()
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener("load", () => {
          resolve({
            imageURL: fr.result,
            image: files[0],
            imageName: files[0].name
          })
        })
      }
    })
  },

  onMutilFilePicked(e: any) {
    return new Promise((resolve, reject) => {
      const files = e.target.files
      if (files[0] !== undefined) {
        if (files[0].name.lastIndexOf(".") <= 0) {
          reject()
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener("load", () => {
          resolve({
            imageURL: fr.result,
            image: files[0],
            imageName: files[0].name
          })
        })
      }
    })
  },

  toSimplest(str: string) {
    str = str.toLowerCase()
    str = str.replace(/ /g, "")
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    str = str.replace(/đ/g, "d")
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ""
    )

    str = str.replace(/ + /g, "")
    return str
  }
}
