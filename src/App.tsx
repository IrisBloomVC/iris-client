import { Box, Button } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { countAtom } from "./atom"

export const App = () => {
  const [count, setCount] = useAtom(countAtom)
  return (
    <Box onClick={()=>setCount((prev)=>prev+1)}>
      <Button>{count}</Button>
    </Box>
  )
}
