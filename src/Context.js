import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
	const [allPhotos, setAllPhotos] = useState([])
	const [cartItems, setCartItems] = useState([])
	

	useEffect(() => {
		fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
			.then(response => response.json())
			.then(photos => setAllPhotos(photos))
	}, [])

	function toggleFavorite(id){
		const updatedArr = allPhotos.map(photo => {
			if(photo.id === id) {
				return {
					...photo,
					isFavorite: !photo.isFavorite
				}
			}
			return photo
		})
		setAllPhotos(updatedArr)
	}

	function addToCart(newItem){
		setCartItems(prevItems => [...prevItems, newItem])
	}

	function removeFromCart(id){
		setCartItems(prevItems => prevItems.filter(item => item.id !== id))
	}

	function emptyCart(){
		setCartItems([])
	}

	return(
		<Context.Provider value={{allPhotos, emptyCart, toggleFavorite, addToCart, removeFromCart, cartItems}}>
			{children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}