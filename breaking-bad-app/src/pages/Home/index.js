import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice'

import { Link } from 'react-router-dom'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

import './styles.css'
import Masonry from 'react-masonry-css'



function Home() {
    const characters = useSelector((state) => state.characters.items)
    const nextPage = useSelector((state) => state.characters.page)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const status = useSelector((state) => state.characters.status)
    const error = useSelector((state) => state.characters.error)

    const dispatch = useDispatch()
    useEffect(() => {
        if(status === 'idle') dispatch(fetchCharacters())
      
    },[dispatch],status)

    if(status === 'failed'){
        return <Error message={error}/>
    }

    const breakpointColsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
        <div>
            <Masonry breakpointCols={breakpointColsObj} className="my-masonry-grid" columnClassName='my-masonry-grid_column'>
            {
                characters.map((character) => {
                    return(
                        <div key={character.char_id}>
                            <Link to={`char/${character.char_id}`}>
                                <img src={character.img} alt={character.name} className="character"></img>
                                <div className='char_name'>{character.name}</div>
                            </Link>
                        </div>
                    )
                })
            }
            </Masonry>
            <div style={{padding: "15px",textAlign:'center'}}>
                {status === 'loading' && <Loading/>}
                {hasNextPage && status !== 'loading' && <button onClick={() => dispatch(fetchCharacters(nextPage))} className='btn__loadMore'>Load More ({nextPage})</button>}
                {!hasNextPage && <p>There is nothing to be shown.</p>}
            </div>
        </div>
    )
}

export default Home