import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'

import {fetchAllQuotes} from '../../redux/quotesSlice'

import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Item from './Item'

function Quotes() {
  const dispatch = useDispatch()
  
  const data = useSelector((state) => state.quotes.items)
  const status = useSelector((state) => state.quotes.status)
  const error = useSelector((state) => state.quotes.error)

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchAllQuotes())
    }
  },[dispatch,status])

  if(error) return <Error message={error} />

  return (
    <div style={{padding: 5}}>
      <h1>Quotes</h1>
      {status === 'loading' && <Loading/>}
      {status === 'succeeded' && data.map((item) => <Item key={item.quote_id} item={item} />)}
      {status === 'succeeded' && <div>{data.length} quotes</div>}
    </div>
  )
}

export default Quotes