import { Box, Button } from "@chakra-ui/react"
import { useRecoilState } from "recoil"
import { countAtom } from "./atom"

export const App = () => {
  const [count, setCount] = useRecoilState(countAtom)
  return (
    <Box onClick={()=>setCount((prev)=>prev+1)}>
      <Button>{count}</Button>
    </Box>
  )
}
