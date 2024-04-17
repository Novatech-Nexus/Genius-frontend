/** Image into base 64 */
export default function convertToBase64(file){

    return new Promise((resolve, reject) => {
        const fileReader = new fileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}