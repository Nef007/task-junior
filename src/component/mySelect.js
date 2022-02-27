import React, {useEffect, useRef, useState} from "react";
import "./myselect.css"


export const MySelect = ({data}) => {

    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState( [])
    const [search, setSearch] = useState('')
    const wrapperRef = useRef(null)

   useEffect(() => {
        // let pokemon = []
        // const promises = new Array(20)
        //     .fill()
        //     .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`))
        // Promise.all(promises).then((pokemonArr) => {
        //     return pokemonArr.map(res => res.json().then(({name, sprites: {front_default: sprite}}) => {
        //         return pokemon.push({name, sprite})
        //
        //     }))
        // })
        setOptions(data)
    }, [])

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    },)

    const handleClickOutside = (event) => {
        const {current: wrap} = wrapperRef
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false)
        }
    }


    const setPokeDex = poke => {
        setSearch(poke)
        setDisplay(false)
    }


    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input id="auto"
                   onClick={() => setDisplay(!display)}
                   placeholder="Type to search"
                   value={search}
                   onChange={(event) => setSearch(event.target.value)}
            />

            {display && (
                <div className="autoContainer">
                    {options.filter((name) => name.toLowerCase().indexOf(search.toLowerCase()) > -1).map((name, i) => {
                        return (
                            <div onClick={() => setPokeDex(name)}

                                 className="option"
                                 key={i}
                            >
                                <span>{name} </span>

                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}