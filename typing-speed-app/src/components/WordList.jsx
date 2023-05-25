import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Chip,Box } from '@mui/material'

function WordList() {
  const [wordShown, setWordShown] = useState(20)
  const { words, wordIndex, status } = useSelector((state) => state.word)

  useEffect(() => {
    const chip = document.querySelector(`.MuiChip-root:nth-child(${wordIndex + 1})`)
    chip.style.backgroundColor = '#19D3DA'

    if (wordIndex > 0) {
      const previousChip = chip.previousSibling
      previousChip.style.backgroundColor = status ? '#89d66f' : '#f74a3e'
    }

    wordIndex === wordShown-1 && setWordShown((prev) => prev + 20)
  }, [wordIndex])

  return (
    <Box display={'flex'} w={'full'} overflow={'hidden'} flexWrap={'wrap'}>
      {words.slice(0, wordShown).map((word) => (
        <Chip
          key={word.id}
          label={word.turkish}
          color='secondary'
          sx={{ marginRight: '5px', marginBottom: '5px' }}
        />
      ))}
    </Box>
  )
}

export default WordList
