import path from "path"
import fs from "fs"
import matter from "gray-matter"
const postsDirectory = path.join(process.cwd(), "docs")
// console.log(postsDirectory);
export const getDocuments = () => {
    // console.log(postsDirectory);
    const fileNames = fs.readdirSync(postsDirectory)
    // const id = 
    const allDocuments = fileNames.map(file => {
        const id = file.replace(".md", "")
        const fullPath = path.join(postsDirectory, file)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const outputData = matter(fileContents)
        return {
            id,
            ...outputData.data
        }
    })
    // console.log(allDocuments);
    return allDocuments.sort((a, b) => {
        if (a.order < b.order) { return -1 }
        if (a.order > b.order) { return 1 }
        return 0
    })
}