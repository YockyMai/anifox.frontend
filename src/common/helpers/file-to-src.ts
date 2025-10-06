export const fileToSrc = async (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result
      if (typeof result === 'string') {
        resolve(result)
      } else {
        reject(new Error('Unexpected result type'))
      }
    }

    reader.onerror = () => {
      reject(reader.error || new Error('File reading failed'))
    }

    reader.readAsDataURL(file)
  })
}
