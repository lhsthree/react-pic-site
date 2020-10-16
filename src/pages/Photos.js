import React, {useContext} from "react"
import {getClass} from "../utils"
import Image from "../components/Image.js"
import {Context} from "../Context"

function Photos() {
	const {allPhotos} = useContext(Context)

	const imageElements = allPhotos.map((img, i) =>{
		return (
			<Image key={img.id} img={img} className={getClass(i)} />
			)
	})
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos